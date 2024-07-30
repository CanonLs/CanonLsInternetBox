import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vercel from 'vite-plugin-vercel'
import path from "path";
import os from 'os'

function getNetWorkIp() {
	// 打开host
	let needHost = "";
	try {
		let network = os.networkInterfaces();

		for (const dev in network) {
			let iface = network[dev];
			for (let i = 0; i < iface.length; i++) {
				const alias = iface[i];
				if (
					alias.family === "IPv4" &&
					alias.address !== "127.0.0.1" &&
					!alias.internal
				) {
					needHost = alias.address;
				}
			}
		}
	} catch (error) {
		needHost = "http://localhost";
	}
	return needHost;
}
const IP = getNetWorkIp();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const BASE_URL = env.VITE_BASE_URL;
	const ROUTER_TYPE = env.VITE_ROUTER_TYPE;

	return {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@assets": path.resolve(__dirname, "./src/assets"),
			},
		},
		base: ROUTER_TYPE == "BrowserRouter" ? BASE_URL : "./",
		plugins: [
			react(),
			// Inspect({
			// 	build: true,
			// 	outputDir: ".vite-inspect",
			// }),
		],
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/styles/global.scss";`,
				},
			},
		},
		server: {
			port: 8888,
			host: IP,
			open: true,
		},
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					// assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
					assetFileNames: assetInfo => {
						let extType = assetInfo.name.split(".")[1];
						if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
							extType = "images";
						}
						if (/mp3|wav|ogg|ttf|otf|woff|woff2/i.test(extType)) {
							extType = "resource";
						}
						return `assets/${extType}/[name]-[hash][extname]`;
					},

					// assetFileNames: (assetInfo) => {
					// 	const { name, source, type } = assetInfo;

					// },
					// 打包后的文件名
					manualChunks: id => {
						if (id.includes("node_modules")) {
							return "vendor";
						}
					},
				},
			},
			assetsInlineLimit: 4096, // 小于4kb图片将会转换为base64
			// outDir: `dist/`, //  导出目标目录
			// assetsDir: "assets", //静态资源文件夹名称
		},
	};
});

