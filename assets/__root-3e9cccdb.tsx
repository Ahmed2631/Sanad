import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/__root.tsx");const useEffect = __vite__cjsImport2_react["useEffect"];import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=f258fe08";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7fbc54ab";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=99c24408";
import appCss from "/src/styles.css?url";
import { reportLovableError } from "/src/lib/lovable-error-reporting.ts";
var _jsxFileName = "/dev-server/src/routes/__root.tsx";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
function NotFoundComponent() {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:7:10",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:8:7",
			children: [
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "text-7xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:9:9",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:10:9",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:11:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:14:9",
					children: /* @__PURE__ */ _jsxDEV(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:15:11",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
_c = NotFoundComponent;
function ErrorComponent({ error, reset }) {
	_s();
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:36:10",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:37:7",
			children: [
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:38:9",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:41:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:44:9",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:45:11",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						"data-tsd-source": "/src/routes/__root.tsx:51:11",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 10
	}, this);
}
_s(ErrorComponent, "g4BU1bO32KZmjSq/EmV92VkGdF0=", false, function() {
	return [useRouter];
});
_c2 = ErrorComponent;
export const Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "سند | خدمات العقار والصيانة المنزلية" },
			{
				name: "description",
				content: "سند — منصة موثوقة لخدمات العقار والصيانة المنزلية في المملكة العربية السعودية. نوفر لك الحماية والراحة في منزلك."
			},
			{
				name: "author",
				content: "Sanad"
			},
			{
				property: "og:title",
				content: "سند | خدمات العقار والصيانة المنزلية"
			},
			{
				property: "og:description",
				content: "منصة موثوقة لخدمات العقار والصيانة المنزلية."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#1a237e"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ _jsxDEV("html", {
		lang: "ar",
		dir: "rtl",
		"data-tsd-source": "/src/routes/__root.tsx:113:10",
		children: [/* @__PURE__ */ _jsxDEV("head", {
			"data-tsd-source": "/src/routes/__root.tsx:115:7",
			children: /* @__PURE__ */ _jsxDEV(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:116:9" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("body", {
			"data-tsd-source": "/src/routes/__root.tsx:118:7",
			children: [children, /* @__PURE__ */ _jsxDEV(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:120:9" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 10
	}, this);
}
_c3 = RootShell;
function RootComponent() {
	_s2();
	const { queryClient } = Route.useRouteContext();
	return /* @__PURE__ */ _jsxDEV(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:128:10",
		children: /* @__PURE__ */ _jsxDEV(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:130:7" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 130,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 128,
		columnNumber: 10
	}, this);
}
_s2(RootComponent, "EkpmuaZ32AlZfsV2op4k1rQaTfI=", false, function() {
	return [Route.useRouteContext];
});
_c4 = RootComponent;
const hot = import.meta.hot;
if (hot && typeof window !== "undefined") {
	hot.data ??= {};
	const tsrReactRefresh = window.__TSR_REACT_REFRESH__ ??= (() => {
		const ignoredExportsById = new Map();
		const previousGetIgnoredExports = window.__getReactRefreshIgnoredExports;
		window.__getReactRefreshIgnoredExports = (ctx) => {
			const ignoredExports = previousGetIgnoredExports?.(ctx) ?? [];
			const moduleIgnored = ignoredExportsById.get(ctx.id) ?? [];
			return [...ignoredExports, ...moduleIgnored];
		};
		return { ignoredExportsById };
	})();
	tsrReactRefresh.ignoredExportsById.set("/dev-server/src/routes/__root.tsx", ["Route"]);
}
export function TSRFastRefreshAnchor() {
	return null;
}
_c5 = TSRFastRefreshAnchor;
if (import.meta.hot) {
	const hot = import.meta.hot;
	const hotData = hot.data ??= {};
	const handleRouteUpdate = function handleRouteUpdate(routeId, newRoute) {
		const router = window.__TSR_ROUTER__;
		const oldRoute = router.routesById[routeId];
		if (!oldRoute) return;
		const generatedRouteOptionKeys = new Set([
			"id",
			"path",
			"getParentRoute"
		]);
		const generatedRouteOptions = {};
		generatedRouteOptionKeys.forEach((key) => {
			if (key in oldRoute.options) generatedRouteOptions[key] = oldRoute.options[key];
		});
		const removedKeys = new Set();
		Object.keys(oldRoute.options).forEach((key) => {
			if (!generatedRouteOptionKeys.has(key) && !(key in newRoute.options)) {
				removedKeys.add(key);
				delete oldRoute.options[key];
			}
		});
		const preserveComponentIdentity = "shellComponent" in oldRoute.options === "shellComponent" in newRoute.options;
		const componentKeys = [
			"component",
			"shellComponent",
			"pendingComponent",
			"errorComponent",
			"notFoundComponent"
		];
		if (preserveComponentIdentity) componentKeys.forEach((key) => {
			if (key in oldRoute.options && key in newRoute.options) newRoute.options[key] = oldRoute.options[key];
		});
		const nextOptions = {
			...newRoute.options,
			...generatedRouteOptions
		};
		oldRoute.options = nextOptions;
		oldRoute.update(nextOptions);
		oldRoute._componentsPromise = void 0;
		oldRoute._lazyPromise = void 0;
		router.setRoutes(router.buildRouteTree());
		syncHotRouteExport(oldRoute);
		router.resolvePathCache.clear();
		const filter = (m) => m.routeId === oldRoute.id;
		const activeMatch = router.stores.matches.get().find(filter);
		const pendingMatch = router.stores.pendingMatches.get().find(filter);
		const cachedMatches = router.stores.cachedMatches.get().filter(filter);
		if (activeMatch || pendingMatch || cachedMatches.length > 0) {
			if (removedKeys.has("loader") || removedKeys.has("beforeLoad")) {
				const matchIds = [
					activeMatch?.id,
					pendingMatch?.id,
					...cachedMatches.map((match) => match.id)
				].filter(Boolean);
				router.batch(() => {
					for (const matchId of matchIds) {
						const store = router.stores.pendingMatchStores.get(matchId) || router.stores.matchStores.get(matchId) || router.stores.cachedMatchStores.get(matchId);
						if (store) store.set((prev) => {
							const next = { ...prev };
							if (removedKeys.has("loader")) next.loaderData = void 0;
							if (removedKeys.has("beforeLoad")) {
								next.__beforeLoadContext = void 0;
								next.context = rebuildMatchContextWithoutBeforeLoad(next);
							}
							return next;
						});
					}
				});
			}
			router.invalidate({
				filter,
				sync: true
			});
		}
		function syncHotRouteExport(liveRoute) {
			newRoute.options = liveRoute.options;
			newRoute.parentRoute = liveRoute.parentRoute;
			newRoute._path = liveRoute._path;
			newRoute._id = liveRoute._id;
			newRoute._fullPath = liveRoute._fullPath;
			newRoute._to = liveRoute._to;
		}
		function getStoreMatch(matchId) {
			return router.stores.pendingMatchStores.get(matchId)?.get() || router.stores.matchStores.get(matchId)?.get() || router.stores.cachedMatchStores.get(matchId)?.get();
		}
		function getMatchList(matchId) {
			const pendingMatches = router.stores.pendingMatches.get();
			if (pendingMatches.some((match) => match.id === matchId)) return pendingMatches;
			const activeMatches = router.stores.matches.get();
			if (activeMatches.some((match) => match.id === matchId)) return activeMatches;
			const cachedMatches = router.stores.cachedMatches.get();
			if (cachedMatches.some((match) => match.id === matchId)) return cachedMatches;
			return [];
		}
		function getParentMatch(match) {
			const matchList = getMatchList(match.id);
			const matchIndex = matchList.findIndex((item) => item.id === match.id);
			if (matchIndex <= 0) return;
			const parentMatch = matchList[matchIndex - 1];
			return getStoreMatch(parentMatch.id) || parentMatch;
		}
		function rebuildMatchContextWithoutBeforeLoad(match) {
			const parentMatch = getParentMatch(match);
			const getParentContext = router.getParentContext;
			return {
				...(getParentContext ? getParentContext.call(router, parentMatch) : parentMatch?.context ?? router.options.context) ?? {},
				...match.__routeContext ?? {}
			};
		}
	};
	const initialRouteId = "__root__" ?? hotData["tsr-route-id"];
	if (initialRouteId) {
		hotData["tsr-route-id"] = initialRouteId;
	}
	const existingRoute = typeof window !== "undefined" && initialRouteId ? window.__TSR_ROUTER__?.routesById?.[initialRouteId] : undefined;
	if (initialRouteId && existingRoute && existingRoute !== Route) {
		handleRouteUpdate(initialRouteId, Route);
		hotData["tsr-route-update-handled"] = Route;
	}
	hot.accept((newModule) => {
		if (Route && newModule && newModule.Route) {
			const routeId = hotData["tsr-route-id"] ?? "__root__";
			if (routeId) {
				hotData["tsr-route-id"] = routeId;
			}
			if (hotData["tsr-route-update-handled"] === newModule.Route) {
				delete hotData["tsr-route-update-handled"];
				return;
			}
			handleRouteUpdate(routeId, newModule.Route);
		}
	});
}
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "NotFoundComponent");
$RefreshReg$(_c2, "ErrorComponent");
$RefreshReg$(_c3, "RootShell");
$RefreshReg$(_c4, "RootComponent");
$RefreshReg$(_c5, "TSRFastRefreshAnchor");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/__root.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/__root.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/__root.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/__root.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTs7OztBQUVBOzs7O1lBR0E7R0FBQTtHQUFBO2FBQUE7SUFDQTtLQUFBO0tBQUE7ZUFBMEQ7SUFBQTs7Ozs7SUFDMUQ7S0FBQTtLQUFBO2VBQWtFO0lBQUE7Ozs7O0lBQ2xFO0tBQUE7S0FBQTtlQUF5RDtJQUV6RDs7Ozs7SUFDQTtLQUFBO0tBQUE7ZUFDQTtNQUFBO01BQUE7TUFBQTtnQkFFaUw7S0FHakw7Ozs7O0lBQ0E7Ozs7O0dBQ0E7Ozs7OztDQUNBOzs7OztBQUVBOztBQUVBLDBDQUE0RTs7Ozs7Ozs7OztZQVM1RTtHQUFBO0dBQUE7YUFBQTtJQUNBO0tBQUE7S0FBQTtlQUE0RTtJQUU1RTs7Ozs7SUFDQTtLQUFBO0tBQUE7ZUFBeUQ7SUFFekQ7Ozs7O0lBQ0E7S0FBQTtLQUFBO2VBQUEsQ0FDQTtNQUFBOzs7Ozs7Z0JBS2lMO0tBR2pMOzs7O2VBQ0E7TUFBQTtNQUFBO01BQUE7Z0JBRTRMO0tBRzVMOzs7O2FBQ0E7Ozs7OztHQUNBOzs7Ozs7Q0FDQTs7Ozs7QUFFQTs7Ozs7QUFFQSxnREFBMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQzNFO0FBRUEsaUNBQXVEOzs7OzthQUl2RDtHQUFBO2FBQ0EseUZBQW9COzs7OztFQUNwQjs7OztZQUNBO0dBQUE7YUFBQSxDQUNBLFVBQ0EscUZBQWdCOzs7O1dBQ2hCOzs7OztVQUNBOzs7Ozs7QUFFQTs7QUFFQTs7Ozs7O1lBTUEsb0ZBQWE7Ozs7O0NBQ2I7Ozs7O0FBRUE7Ozs7O0FBQUM7QUFBQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIl9fcm9vdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQge1xuICBPdXRsZXQsXG4gIExpbmssXG4gIGNyZWF0ZVJvb3RSb3V0ZVdpdGhDb250ZXh0LFxuICB1c2VSb3V0ZXIsXG4gIEhlYWRDb250ZW50LFxuICBTY3JpcHRzLFxufSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYXBwQ3NzIGZyb20gXCIuLi9zdHlsZXMuY3NzP3VybFwiO1xuaW1wb3J0IHsgcmVwb3J0TG92YWJsZUVycm9yIH0gZnJvbSBcIi4uL2xpYi9sb3ZhYmxlLWVycm9yLXJlcG9ydGluZ1wiO1xuXG5mdW5jdGlvbiBOb3RGb3VuZENvbXBvbmVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1iYWNrZ3JvdW5kIHB4LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj40MDQ8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+UGFnZSBub3QgZm91bmQ8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgVGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3Qgb3IgaGFzIGJlZW4gbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1wcmltYXJ5IHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLXByaW1hcnkvOTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdvIGhvbWVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVycm9yQ29tcG9uZW50KHsgZXJyb3IsIHJlc2V0IH06IHsgZXJyb3I6IEVycm9yOyByZXNldDogKCkgPT4gdm9pZCB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRMb3ZhYmxlRXJyb3IoZXJyb3IsIHsgYm91bmRhcnk6IFwidGFuc3RhY2tfcm9vdF9lcnJvcl9jb21wb25lbnRcIiB9KTtcbiAgfSwgW2Vycm9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1iYWNrZ3JvdW5kIHB4LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICBUaGlzIHBhZ2UgZGlkbid0IGxvYWRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBlbmQuIFlvdSBjYW4gdHJ5IHJlZnJlc2hpbmcgb3IgaGVhZCBiYWNrIGhvbWUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLXByaW1hcnkgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctcHJpbWFyeS85MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJ5IGFnYWluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctYWNjZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyBob21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgUm91dGUgPSBjcmVhdGVSb290Um91dGVXaXRoQ29udGV4dDx7IHF1ZXJ5Q2xpZW50OiBRdWVyeUNsaWVudCB9PigpKHtcbiAgaGVhZDogKCkgPT4gKHtcbiAgICBtZXRhOiBbXG4gICAgICB7IGNoYXJTZXQ6IFwidXRmLThcIiB9LFxuICAgICAgeyBuYW1lOiBcInZpZXdwb3J0XCIsIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiB9LFxuICAgICAgeyB0aXRsZTogXCLYs9mG2K8gfCDYrtiv2YXYp9iqINin2YTYudmC2KfYsSDZiNin2YTYtdmK2KfZhtipINin2YTZhdmG2LLZhNmK2KlcIiB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgXCLYs9mG2K8g4oCUINmF2YbYtdipINmF2YjYq9mI2YLYqSDZhNiu2K/Zhdin2Kog2KfZhNi52YLYp9ixINmI2KfZhNi12YrYp9mG2Kkg2KfZhNmF2YbYstmE2YrYqSDZgdmKINin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2KkuINmG2YjZgdixINmE2YMg2KfZhNit2YXYp9mK2Kkg2YjYp9mE2LHYp9it2Kkg2YHZiiDZhdmG2LLZhNmDLlwiLFxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogXCJhdXRob3JcIiwgY29udGVudDogXCJTYW5hZFwiIH0sXG4gICAgICB7IHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsIGNvbnRlbnQ6IFwi2LPZhtivIHwg2K7Yr9mF2KfYqiDYp9mE2LnZgtin2LEg2YjYp9mE2LXZitin2YbYqSDYp9mE2YXZhtiy2YTZitipXCIgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIixcbiAgICAgICAgY29udGVudDogXCLZhdmG2LXYqSDZhdmI2KvZiNmC2Kkg2YTYrtiv2YXYp9iqINin2YTYudmC2KfYsSDZiNin2YTYtdmK2KfZhtipINin2YTZhdmG2LLZhNmK2KkuXCIsXG4gICAgICB9LFxuICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH0sXG4gICAgICB7IG5hbWU6IFwidHdpdHRlcjpjYXJkXCIsIGNvbnRlbnQ6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIH0sXG4gICAgICB7IG5hbWU6IFwidGhlbWUtY29sb3JcIiwgY29udGVudDogXCIjMWEyMzdlXCIgfSxcbiAgICBdLFxuICAgIGxpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IGFwcENzcyxcbiAgICAgIH0sXG4gICAgICB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIsIHR5cGU6IFwiaW1hZ2UveC1pY29uXCIgfSxcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRhamF3YWw6d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuICBzaGVsbENvbXBvbmVudDogUm9vdFNoZWxsLFxuICBjb21wb25lbnQ6IFJvb3RDb21wb25lbnQsXG4gIG5vdEZvdW5kQ29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCxcbiAgZXJyb3JDb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxufSk7XG5cbmZ1bmN0aW9uIFJvb3RTaGVsbCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImFyXCIgZGlyPVwicnRsXCI+XG5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8SGVhZENvbnRlbnQgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBSb290Q29tcG9uZW50KCkge1xuICBjb25zdCB7IHF1ZXJ5Q2xpZW50IH0gPSBSb3V0ZS51c2VSb3V0ZUNvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgey8qIFJlcXVpcmVkOiBuZXN0ZWQgcm91dGVzIHJlbmRlciBoZXJlLiBSZW1vdmluZyA8T3V0bGV0IC8+IGJyZWFrcyBhbGwgY2hpbGQgcm91dGVzLiAqL31cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9kZXYtc2VydmVyL3NyYy9yb3V0ZXMvX19yb290LnRzeCJ9