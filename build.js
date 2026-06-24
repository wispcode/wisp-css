const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

async function build() {
  fs.mkdirSync(DIST, { recursive: true });

  const files = fg.sync("**/*.css", { cwd: SRC, absolute: true, ignore: ["**/imports.css"]  });

  // Individual files — all flat in dist/
  await Promise.all(
    files.map((file) =>
      esbuild.build({
        entryPoints: [file],
        entryNames: "[name].min",
        outdir: path.join(DIST, "modules"),
        bundle: false,
        minify: true,
        loader: { ".css": "css" },
      })
    )
  );

  // Global bundle via src/imports.css
  await esbuild.build({
    entryPoints: [path.join(SRC, "imports.css")],
    entryNames: "bundle.min",
    outdir: DIST,
    bundle: true,
    minify: true,
    loader: { ".css": "css" },
  });

  console.log("✅ Done");
}

build().catch((err) => { console.error(err); process.exit(1); });