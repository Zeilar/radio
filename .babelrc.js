const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs";
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm";

module.exports = function (api) {
  	api.cache(false);

	const presets = [
		[
			"@babel/env",
			{
				loose: true,
				modules: isCommonJS ? "commonjs" : false,
				targets: {
					esmodules: isESM ? true : undefined,
				},
				useBuiltIns: "entry",
				corejs: "3",
			},
		],
	];

	const plugins = [
		["@babel/plugin-transform-runtime"],
	];

	return { presets, plugins };
}
