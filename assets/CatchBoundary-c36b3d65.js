const React$1 = ((m, n) => n || !m?.__esModule ? {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m} : m)(__vite__cjsImport0_react, 1);const jsx = __vite__cjsImport1_react_jsxRuntime["jsx"]; const jsxs = __vite__cjsImport1_react_jsxRuntime["jsxs"];"use client";
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99c24408";
import __vite__cjsImport1_react_jsxRuntime from "/node_modules/.vite/deps/react_jsx-runtime.js?v=99c24408";
//#region src/CatchBoundary.tsx
function CatchBoundary(props) {
	const errorComponent = props.errorComponent ?? ErrorComponent;
	return /* @__PURE__ */ jsx(CatchBoundaryImpl, {
		getResetKey: props.getResetKey,
		onCatch: props.onCatch,
		children: ({ error, reset }) => {
			if (error) return React$1.createElement(errorComponent, {
				error,
				reset
			});
			return props.children;
		}
	});
}
var CatchBoundaryImpl = class extends React$1.Component {
	constructor(..._args) {
		super(..._args);
		this.state = { error: null };
	}
	static getDerivedStateFromProps(props, state) {
		const resetKey = props.getResetKey();
		if (state.error && state.resetKey !== resetKey) return {
			resetKey,
			error: null
		};
		return { resetKey };
	}
	static getDerivedStateFromError(error) {
		return { error };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidCatch(error, errorInfo) {
		if (this.props.onCatch) this.props.onCatch(error, errorInfo);
	}
	render() {
		return this.props.children({
			error: this.state.error,
			reset: () => {
				this.reset();
			}
		});
	}
};
function ErrorComponent({ error }) {
	const [show, setShow] = React$1.useState("development" !== "production");
	return /* @__PURE__ */ jsxs("div", {
		style: {
			padding: ".5rem",
			maxWidth: "100%"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: ".5rem"
				},
				children: [/* @__PURE__ */ jsx("strong", {
					style: { fontSize: "1rem" },
					children: "Something went wrong!"
				}), /* @__PURE__ */ jsx("button", {
					style: {
						appearance: "none",
						fontSize: ".6em",
						border: "1px solid currentColor",
						padding: ".1rem .2rem",
						fontWeight: "bold",
						borderRadius: ".25rem"
					},
					onClick: () => setShow((d) => !d),
					children: show ? "Hide Error" : "Show Error"
				})]
			}),
			/* @__PURE__ */ jsx("div", { style: { height: ".25rem" } }),
			show ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", {
				style: {
					fontSize: ".7em",
					border: "1px solid red",
					borderRadius: ".25rem",
					padding: ".3rem",
					color: "red",
					overflow: "auto"
				},
				children: error.message ? /* @__PURE__ */ jsx("code", { children: error.message }) : null
			}) }) : null
		]
	});
}
//#endregion
export { CatchBoundary, ErrorComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7OztBQU1BLFNBQWdCLGNBQWMsT0FLM0I7Q0FDRCxNQUFNLGlCQUFpQixNQUFNLGtCQUFrQjtDQUUvQyxPQUNFLG9CQUFDLG1CQUFEO0VBQ0UsYUFBYSxNQUFNO0VBQ25CLFNBQVMsTUFBTTtFQUNmLFdBQVcsRUFBRSxPQUFPLFlBQVk7R0FDOUIsSUFBSSxPQUNGLE9BQU8sUUFBTSxjQUFjLGdCQUFnQjtJQUN6QztJQUNBO0dBQ0YsQ0FBQztHQUdILE9BQU8sTUFBTTtFQUNmO0NBQ0Q7QUFFTDtBQUVBLElBQU0sb0JBQU4sY0FBZ0MsUUFBTSxVQU9uQzs7O2VBQ08sRUFBRSxPQUFPLEtBQUs7O0NBRXRCLE9BQU8seUJBQ0wsT0FDQSxPQUNBO0VBQ0EsTUFBTSxXQUFXLE1BQU0sWUFBWTtFQUVuQyxJQUFJLE1BQU0sU0FBUyxNQUFNLGFBQWEsVUFDcEMsT0FBTztHQUFFO0dBQVUsT0FBTztFQUFLO0VBR2pDLE9BQU8sRUFBRSxTQUFTO0NBQ3BCO0NBQ0EsT0FBTyx5QkFBeUIsT0FBYztFQUM1QyxPQUFPLEVBQUUsTUFBTTtDQUNqQjtDQUNBLFFBQVE7RUFDTixLQUFLLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQztDQUMvQjtDQUNBLGtCQUFrQixPQUFjLFdBQXNCO0VBQ3BELElBQUksS0FBSyxNQUFNLFNBQ2IsS0FBSyxNQUFNLFFBQVEsT0FBTyxTQUFTO0NBRXZDO0NBQ0EsU0FBUztFQUNQLE9BQU8sS0FBSyxNQUFNLFNBQVM7R0FDekIsT0FBTyxLQUFLLE1BQU07R0FDbEIsYUFBYTtJQUNYLEtBQUssTUFBTTtHQUNiO0VBQ0YsQ0FBQztDQUNIO0FBQ0Y7QUFFQSxTQUFnQixlQUFlLEVBQUUsU0FBeUI7Q0FDeEQsTUFBTSxDQUFDLE1BQU0sV0FBVyxRQUFNLDJCQUFrQyxZQUFZO0NBRTVFLE9BQ0UscUJBQUMsT0FBRDtFQUFLLE9BQU87R0FBRSxTQUFTO0dBQVMsVUFBVTtFQUFPO1lBQWpEO0dBQ0UscUJBQUMsT0FBRDtJQUFLLE9BQU87S0FBRSxTQUFTO0tBQVEsWUFBWTtLQUFVLEtBQUs7SUFBUTtjQUFsRSxDQUNFLG9CQUFDLFVBQUQ7S0FBUSxPQUFPLEVBQUUsVUFBVSxPQUFPO2VBQUc7SUFBNkIsSUFDbEUsb0JBQUMsVUFBRDtLQUNFLE9BQU87TUFDTCxZQUFZO01BQ1osVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLGNBQWM7S0FDaEI7S0FDQSxlQUFlLFNBQVMsTUFBTSxDQUFDLENBQUM7ZUFFL0IsT0FBTyxlQUFlO0lBQ2pCLEVBQ0w7O0dBQ0wsb0JBQUMsT0FBRCxFQUFLLE9BQU8sRUFBRSxRQUFRLFNBQVMsRUFBSTtHQUNsQyxPQUNDLG9CQUFDLE9BQUQsWUFDRSxvQkFBQyxPQUFEO0lBQ0UsT0FBTztLQUNMLFVBQVU7S0FDVixRQUFRO0tBQ1IsY0FBYztLQUNkLFNBQVM7S0FDVCxPQUFPO0tBQ1AsVUFBVTtJQUNaO2NBRUMsTUFBTSxVQUFVLG9CQUFDLFFBQUQsWUFBTyxNQUFNLFFBQWMsS0FBSTtHQUM3QyxHQUNGLEtBQ0g7RUFDRDs7QUFFVCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NhdGNoQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgRXJyb3JSb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vcm91dGUnXG5pbXBvcnQgdHlwZSB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeShwcm9wczoge1xuICBnZXRSZXNldEtleTogKCkgPT4gbnVtYmVyIHwgc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgZXJyb3JDb21wb25lbnQ/OiBFcnJvclJvdXRlQ29tcG9uZW50XG4gIG9uQ2F0Y2g/OiAoZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykgPT4gdm9pZFxufSkge1xuICBjb25zdCBlcnJvckNvbXBvbmVudCA9IHByb3BzLmVycm9yQ29tcG9uZW50ID8/IEVycm9yQ29tcG9uZW50XG5cbiAgcmV0dXJuIChcbiAgICA8Q2F0Y2hCb3VuZGFyeUltcGxcbiAgICAgIGdldFJlc2V0S2V5PXtwcm9wcy5nZXRSZXNldEtleX1cbiAgICAgIG9uQ2F0Y2g9e3Byb3BzLm9uQ2F0Y2h9XG4gICAgICBjaGlsZHJlbj17KHsgZXJyb3IsIHJlc2V0IH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZXJyb3JDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlblxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmNsYXNzIENhdGNoQm91bmRhcnlJbXBsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtcbiAgZ2V0UmVzZXRLZXk6ICgpID0+IG51bWJlciB8IHN0cmluZ1xuICBjaGlsZHJlbjogKHByb3BzOiB7XG4gICAgZXJyb3I6IEVycm9yIHwgbnVsbFxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXG4gIH0pID0+IFJlYWN0LlJlYWN0Tm9kZVxuICBvbkNhdGNoPzogKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBFcnJvckluZm8pID0+IHZvaWRcbn0+IHtcbiAgc3RhdGUgPSB7IGVycm9yOiBudWxsIH0gYXMgeyBlcnJvcjogRXJyb3IgfCBudWxsOyByZXNldEtleT86IHN0cmluZyB8IG51bWJlciB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhcbiAgICBwcm9wczogeyBnZXRSZXNldEtleTogKCkgPT4gc3RyaW5nIHwgbnVtYmVyIH0sXG4gICAgc3RhdGU6IHsgcmVzZXRLZXk/OiBzdHJpbmcgfCBudW1iZXI7IGVycm9yOiBFcnJvciB8IG51bGwgfSxcbiAgKSB7XG4gICAgY29uc3QgcmVzZXRLZXkgPSBwcm9wcy5nZXRSZXNldEtleSgpXG5cbiAgICBpZiAoc3RhdGUuZXJyb3IgJiYgc3RhdGUucmVzZXRLZXkgIT09IHJlc2V0S2V5KSB7XG4gICAgICByZXR1cm4geyByZXNldEtleSwgZXJyb3I6IG51bGwgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlc2V0S2V5IH1cbiAgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yIH1cbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IG51bGwgfSlcbiAgfVxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DYXRjaCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNhdGNoKGVycm9yLCBlcnJvckluZm8pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgfSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckNvbXBvbmVudCh7IGVycm9yIH06IHsgZXJyb3I6IGFueSB9KSB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbScsIG1heFdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJy41cmVtJyB9fT5cbiAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nIH19PlNvbWV0aGluZyB3ZW50IHdyb25nITwvc3Ryb25nPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnLjZlbScsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcuMXJlbSAuMnJlbScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcuMjVyZW0nLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdygoZCkgPT4gIWQpfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3cgPyAnSGlkZSBFcnJvcicgOiAnU2hvdyBFcnJvcid9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJy4yNXJlbScgfX0gLz5cbiAgICAgIHtzaG93ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnLjdlbScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcuMjVyZW0nLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnLjNyZW0nLFxuICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlID8gPGNvZGU+e2Vycm9yLm1lc3NhZ2V9PC9jb2RlPiA6IG51bGx9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJmaWxlIjoiL2Rldi1zZXJ2ZXIvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC1yb3V0ZXIvZGlzdC9lc20vQ2F0Y2hCb3VuZGFyeS5qcyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=