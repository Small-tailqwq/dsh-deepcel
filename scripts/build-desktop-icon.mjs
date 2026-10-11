// Build the Windows desktop shortcut ICO (skin.json#desktopIcon) from the
// plugin-list icon, so the skin manager's "shortcut icon follows the skin"
// shows the same artwork as the plugin card. Each size is rendered from the
// SVG rather than downscaled, and stored as a PNG frame (Windows Vista+).
// Requires `sharp` to be resolvable (the scaffold workspace provides it).
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(root, 'assets/plugin-icon.svg')
const target = resolve(root, 'assets/icons/deepcel.ico')
const SIZES = [16, 24, 32, 48, 64, 128, 256]

const svg = await readFile(source)
const frames = []
for (const size of SIZES) {
  // The SVG is 64 px wide; density scales it so the vector renders at `size`.
  frames.push(await sharp(svg, { density: (72 * size) / 64 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer())
}

const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(frames.length, 4)
const entries = Buffer.alloc(16 * frames.length)
let offset = header.length + entries.length
frames.forEach((frame, index) => {
  const size = SIZES[index]
  const entry = index * 16
  entries.writeUInt8(size >= 256 ? 0 : size, entry)
  entries.writeUInt8(size >= 256 ? 0 : size, entry + 1)
  entries.writeUInt16LE(1, entry + 4)
  entries.writeUInt16LE(32, entry + 6)
  entries.writeUInt32LE(frame.length, entry + 8)
  entries.writeUInt32LE(offset, entry + 12)
  offset += frame.length
})

await mkdir(dirname(target), { recursive: true })
await writeFile(target, Buffer.concat([header, entries, ...frames]))
console.log(`${target} (${offset} bytes)`)
