import { Rolldown, type UserConfig } from 'tsdown'
import { clientBundle } from '../../shared/tsdown.client.ts'

const ID = '@smalltailqwq/dsh-client-ui-skin-deepcel'

export default (): UserConfig[] => clientBundle(ID, ['src/index.ts'])().map(config => config.name === `${ID}/client`
  ? {
      ...config,
      plugins: [
        config.plugins,
        {
          name: 'deepcel-portable-css-region-labels',
          renderChunk(code) {
            return new Rolldown.RolldownMagicString(code).replace(
              /\\0dsh-skin-css:[^\r\n]*?[\\/]src[\\/]client[\\/]([^\\/\r\n]+\.module\.css)\.mjs/g,
              '\\0dsh-skin-css:src/client/$1.mjs',
            )
          },
        },
      ],
    }
  : config)
