import * as esbuild from 'esbuild'

const entryPoint = 'app/src/app.ts'

;(async () => {
  let result = await esbuild.build({
    entryPoints: [entryPoint],
    external: ['@test_ts_project_references/*', 'node_modules/*'],
    bundle: true,
    metafile: true,
    outfile: '/dev/null',
  })

  console.log(result.metafile.inputs[entryPoint].imports)
})()
