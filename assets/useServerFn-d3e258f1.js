const React = ((m, n) => n || !m?.__esModule ? {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m} : m)(__vite__cjsImport0_react, 1);import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99c24408";
import { isRedirect, useRouter } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7fbc54ab";
//#region src/useServerFn.ts
function useServerFn(serverFn) {
	const router = useRouter();
	return React.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
//#endregion
export { useServerFn };

                                       
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlU2VydmVyRm4uanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZVNlcnZlckZuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaXNSZWRpcmVjdCwgdXNlUm91dGVyIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlcnZlckZuPFQgZXh0ZW5kcyAoLi4uZGVwczogQXJyYXk8YW55PikgPT4gUHJvbWlzZTxhbnk+PihcbiAgc2VydmVyRm46IFQsXG4pOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gUmV0dXJuVHlwZTxUPiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICguLi5hcmdzOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2ZXJGbiguLi5hcmdzKVxuXG4gICAgICAgIGlmIChpc1JlZGlyZWN0KHJlcykpIHtcbiAgICAgICAgICB0aHJvdyByZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoaXNSZWRpcmVjdChlcnIpKSB7XG4gICAgICAgICAgZXJyLm9wdGlvbnMuX2Zyb21Mb2NhdGlvbiA9IHJvdXRlci5zdG9yZXMubG9jYXRpb24uZ2V0KClcbiAgICAgICAgICByZXR1cm4gcm91dGVyLm5hdmlnYXRlKHJvdXRlci5yZXNvbHZlUmVkaXJlY3QoZXJyKS5vcHRpb25zKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfSxcbiAgICBbcm91dGVyLCBzZXJ2ZXJGbl0sXG4gICkgYXMgYW55XG59XG4iXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQWdCLFlBQ2QsVUFDMkM7Q0FDM0MsTUFBTSxTQUFTLFVBQVU7Q0FFekIsT0FBTyxNQUFNLFlBQ1gsT0FBTyxHQUFHLFNBQXFCO0VBQzdCLElBQUk7R0FDRixNQUFNLE1BQU0sTUFBTSxTQUFTLEdBQUcsSUFBSTtHQUVsQyxJQUFJLFdBQVcsR0FBRyxHQUNoQixNQUFNO0dBR1IsT0FBTztFQUNULFNBQVMsS0FBSztHQUNaLElBQUksV0FBVyxHQUFHLEdBQUc7SUFDbkIsSUFBSSxRQUFRLGdCQUFnQixPQUFPLE9BQU8sU0FBUyxJQUFJO0lBQ3ZELE9BQU8sT0FBTyxTQUFTLE9BQU8sZ0JBQWdCLEdBQUcsRUFBRSxPQUFPO0dBQzVEO0dBRUEsTUFBTTtFQUNSO0NBQ0YsR0FDQSxDQUFDLFFBQVEsUUFBUSxDQUNuQjtBQUNGIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==