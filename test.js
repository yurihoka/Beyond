(exports.id = 795),
  (exports.ids = [795]),
  (exports.modules = {
    5835: (e, s, t) => {
      Promise.resolve().then(t.t.bind(t, 2994, 23)),
        Promise.resolve().then(t.t.bind(t, 6114, 23)),
        Promise.resolve().then(t.t.bind(t, 9727, 23)),
        Promise.resolve().then(t.t.bind(t, 9671, 23)),
        Promise.resolve().then(t.t.bind(t, 1868, 23)),
        Promise.resolve().then(t.t.bind(t, 4759, 23));
    },
    2964: () => {},
    4663: (e, s, t) => {
      "use strict";
      t.d(s, {
        zx: () => i,
        cd: () => f,
        T4: () => y,
        l0: () => x,
        Ay: () => S,
        II: () => u,
        wp: () => p,
        Yt: () => b,
        PA: () => N,
        Q8: () => j,
        vw: () => w,
      });
      var l = t(326),
        a = t(7577),
        r = t.n(a);
      let i = ({ entry: e, onClick: s }) => {
        let t =
          "w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 mt-2 hover:bg-lime-300 focus:outline-none";
        return l.jsx("div", {
          children: (0, l.jsxs)("div", {
            className: "w-full flex justify-center",
            children: [
              "signin" === e &&
                l.jsx("button", { className: t, children: "SIGN IN" }),
              "signup" === e &&
                l.jsx("button", { className: t, children: "SIGN UP" }),
              "startworkout" === e &&
                l.jsx("button", {
                  type: "button",
                  className: t,
                  onClick: s,
                  children: "START WORKOUT",
                }),
              "finishworkout" === e &&
                l.jsx("button", { className: t, children: "FINISH WORKOUT" }),
              "addset" === e &&
                l.jsx("button", {
                  type: "button",
                  className: t,
                  onClick: s,
                  children: "ADD SET",
                }),
              "addexercises" === e &&
                l.jsx("button", {
                  type: "button",
                  className: t,
                  onClick: s,
                  children: "ADD EXERCISES",
                }),
              "cancelworkout" === e &&
                l.jsx("button", {
                  type: "button",
                  className:
                    "w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-400 mt-2 hover:bg-gray-300 focus:outline-none",
                  onClick: s,
                  children: "CANCEL WORKOUT",
                }),
              "closeexerciselist" === e &&
                l.jsx("button", {
                  type: "button",
                  className: t,
                  onClick: s,
                  children: "X",
                }),
              "edit" === e &&
                l.jsx("button", {
                  type: "button",
                  className: t,
                  onClick: s,
                  children: "EDIT",
                }),
              "delete" === e &&
                l.jsx("button", {
                  type: "button",
                  className:
                    "w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-rose-400 mt-2 hover:bg-rose-300 focus:outline-none",
                  onClick: s,
                  children: "DELETE",
                }),
            ],
          }),
        });
      };
      var c = t(4723),
        n = t(5047);
      let d = async (e, s) => {
          try {
            let t = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                body: JSON.stringify({ email: e, password: s }),
              }),
              l = 200 === t.status,
              a = await t.text();
            return { isSucceeded: l, msg: a };
          } catch (e) {
            console.log(e);
          }
        },
        o = async (e, s) => {
          try {
            let t = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                body: JSON.stringify({ email: e, password: s }),
              }),
              l = 200 === t.status,
              a = await t.text();
            return { isSucceeded: l, msg: a };
          } catch (e) {
            console.log(e);
          }
        },
        x = ({ entry: e }) => {
          let [s, t] = r().useState(""),
            {
              register: x,
              handleSubmit: m,
              formState: { errors: h },
            } = (0, c.cI)();
          return (
            (0, n.useRouter)(),
            (0, a.useEffect)(() => {
              t(h?.email?.message || h?.password?.message);
            }, [h]),
            (0, l.jsxs)("form", {
              className: "flex flex-col items-center justify-center",
              onSubmit: m((s) => {
                let { email: l, password: a } = s;
                (async () => {
                  let s = "signin" === e ? await d(l, a) : await o(l, a);
                  s?.isSucceeded, t(s?.msg);
                })();
              }),
              children: [
                l.jsx(u, { type: "email", register: x }),
                l.jsx(u, { type: "password", register: x }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-4",
                  children: [
                    l.jsx(i, { entry: e }),
                    l.jsx("p", { className: "text-rose-400", children: s }),
                  ],
                }),
              ],
            })
          );
        },
        m = () =>
          (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#bbb",
            stroke: "#bbb",
            className: "w-4 h-4 absolute right-4",
            viewBox: "0 0 24 24",
            children: [
              l.jsx("circle", {
                cx: "10",
                cy: "7",
                r: "6",
                "data-original": "#000000",
              }),
              l.jsx("path", {
                d: "M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z",
                "data-original": "#000000",
              }),
            ],
          }),
        h = () =>
          l.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#bbb",
            stroke: "#bbb",
            className: "w-4 h-4 absolute right-4 cursor-pointer",
            viewBox: "0 0 128 128",
            children: l.jsx("path", {
              d: "M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z",
              "data-original": "#000000",
            }),
          }),
        u = ({ type: e, register: s }) => {
          let t =
            "email" === e
              ? s("email", {
                  required: !0,
                  pattern: {
                    value: /[A-Za-z0-9\._\-]+@[A-Za-z0-9\._\-]+\.[A-Za-z]+/,
                    message:
                      "英数字または記号(.-_)を含むメールアドレスを入力してください",
                  },
                })
              : s("password", {
                  required: !0,
                  pattern: {
                    value: /[A-Za-z0-9]+/,
                    message: "英数字を含むパスワードを入力してください",
                  },
                });
          return l.jsx("div", {
            className: "max-w-md w-full",
            children: l.jsx("div", {
              className: "mt-8 space-y-4",
              children: (0, l.jsxs)("div", {
                children: [
                  l.jsx("label", {
                    className: "text-gray-800 text-sm mb-2 block",
                    children: e,
                  }),
                  (0, l.jsxs)("div", {
                    className: "relative flex items-center",
                    children: [
                      l.jsx("input", {
                        required: !0,
                        className:
                          "w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600",
                        placeholder: `Enter your ${e}`,
                        ...t,
                      }),
                      "email" === e && l.jsx(m, {}),
                      "password" === e && l.jsx(h, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var g = t(434);
      let p = ({ userEmail: e }) =>
          l.jsx("div", {
            children: (0, l.jsxs)("ul", {
              className: "flex justify-between items-center bg-gray-200 px-10",
              children: [
                l.jsx("li", {
                  className: "mr-3",
                  children: l.jsx(g.default, {
                    className: "text-gray-500 hover:text-gray-700",
                    href: "/dashboard",
                    children: "HOME",
                  }),
                }),
                (0, l.jsxs)("li", {
                  className: "mr-3 flex items-center gap-4",
                  children: [
                    l.jsx(j, {}),
                    l.jsx("a", {
                      className: "text-gray-500 hover:text-gray-700",
                      href: "#",
                      children: e,
                    }),
                  ],
                }),
              ],
            }),
          }),
        j = () => {
          let e = (0, n.useRouter)();
          return l.jsx("button", {
            className: "p-1 rounded-md text-gray-500 hover:text-gray-700",
            onClick: () => {
              localStorage.clear(), e.push("/signin");
            },
            children: "サインアウト",
          });
        },
        b = ({ children: e }) => {
          let s = (0, n.useRouter)(),
            t = localStorage.getItem("email");
          if (null !== t && "" !== t) return l.jsx(l.Fragment, { children: e });
          s.push("/signin");
        },
        f = ({ name: e, register: s, exercises: t, setExercises: r }) => {
          let [c, n] = (0, a.useState)([1]);
          return (0, l.jsxs)("div", {
            className: "relative overflow-x-auto m-6",
            children: [
              (0, l.jsxs)("div", {
                className: "flex justify-between",
                children: [
                  l.jsx("h2", { className: "text-lg", children: e }),
                  l.jsx(i, {
                    entry: "closeexerciselist",
                    onClick: () => {
                      r(t.filter((s) => s !== e));
                    },
                  }),
                ],
              }),
              (0, l.jsxs)("table", {
                className:
                  "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
                children: [
                  l.jsx("thead", {
                    className:
                      "text-xs text-gray-700 uppercase dark:text-gray-400",
                    children: (0, l.jsxs)("tr", {
                      children: [
                        l.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3 rounded-s-lg",
                          children: "Set",
                        }),
                        l.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Kgs",
                        }),
                        l.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3 rounded-e-lg",
                          children: "Reps",
                        }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    children: c.map((t, a) =>
                      l.jsx(w, { name: e, set: t, register: s }, a)
                    ),
                  }),
                ],
              }),
              l.jsx(i, {
                entry: "addset",
                onClick: () => {
                  n([...c, c.length + 1]);
                },
              }),
            ],
          });
        },
        y = ({ setExercises: e, onCancelClick: s, onAddClick: t }) => {
          let [r, c] = (0, a.useState)([]),
            [n, d] = (0, a.useState)([]);
          return (
            (0, a.useEffect)(() => {
              (async () => {
                let e = await fetch("http://localhost:3000/api/exercises");
                d((await e.json()).map((e) => e.name));
              })();
            }, []),
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 p-5 flex flex-col items-start absolute z-20",
                  children: [
                    l.jsx("ul", {
                      className: "w-full max-w-xl mt-auto flex flex-col",
                      children: n.map((e, s) =>
                        l.jsx(
                          "li",
                          {
                            className:
                              "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:mt-0",
                            children: (0, l.jsxs)("div", {
                              className: "relative flex items-start w-full",
                              children: [
                                l.jsx("div", {
                                  className: "flex items-center h-5",
                                  children: l.jsx("input", {
                                    id: `hs-list-group-item-checkbox-${s}`,
                                    name: `hs-list-group-item-checkbox-${s}`,
                                    type: "checkbox",
                                    className:
                                      "border-gray-200 disabled:opacity-50",
                                    onChange: (s) => {
                                      if (s.target.checked) {
                                        if (r.includes(e)) return;
                                        c([...r, e]);
                                      }
                                      r.includes(e) &&
                                        c(r.filter((s) => s !== e));
                                    },
                                  }),
                                }),
                                l.jsx("label", {
                                  htmlFor: `hs-list-group-item-checkbox-${s}`,
                                  className:
                                    "ms-3.5 block w-full text-sm text-gray-600",
                                  children: e,
                                }),
                              ],
                            }),
                          },
                          s
                        )
                      ),
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex justify-between w-full",
                      children: [
                        l.jsx(i, {
                          entry: "closeexerciselist",
                          onClick: () => {
                            t();
                          },
                        }),
                        l.jsx("button", {
                          className:
                            "py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 mt-2 hover:bg-lime-300 focus:outline-none",
                          type: "button",
                          onClick: () => {
                            e((e) => {
                              let s = r.filter((s) => !e.includes(s));
                              return [...e, ...s];
                            });
                          },
                          children: "ADD",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "fixed bg-black bg-opacity-50 w-full h-full z-10",
                  onClick: () => s(),
                }),
              ],
            })
          );
        },
        N = ({ field: e, name: s, set: t, register: a }) => {
          let r = `${s.replace(" ", "_")}.${t - 1}.${e}`;
          return (0, l.jsxs)("div", {
            children: [
              l.jsx("label", {
                htmlFor: e,
                className: "block text-sm font-medium leading-6 text-gray-900",
              }),
              l.jsx("div", {
                className: "mt-1",
                children: l.jsx("input", {
                  id: e,
                  type: "number",
                  placeholder: "0",
                  required: !0,
                  autoComplete: "off",
                  className:
                    "w-20 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  ...a(`${r}`, { required: !0, min: 0 }),
                }),
              }),
            ],
          });
        },
        w = ({ name: e, set: s, register: t }) =>
          (0, l.jsxs)("tr", {
            className: "bg-white",
            children: [
              l.jsx("th", {
                scope: "row",
                className:
                  "px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
                children: s,
              }),
              l.jsx("td", {
                className: "px-6 py-4",
                children: l.jsx(N, {
                  field: "weight",
                  name: e,
                  set: s,
                  register: t,
                }),
              }),
              l.jsx("td", {
                className: "px-6 py-4",
                children: l.jsx(N, {
                  field: "rep",
                  name: e,
                  set: s,
                  register: t,
                }),
              }),
            ],
          }),
        v = ({ sessions: e }) =>
          l.jsx("ul", {
            className: " w-4/5",
            children: e.map((e, s) =>
              l.jsx(k, { date: e.date, data: e.data }, s)
            ),
          }),
        k = ({ date: e, data: s }) => {
          let [t, r] = (0, a.useState)(!1);
          return (0, l.jsxs)("li", {
            className: "cursor-pointer",
            onClick: () => {
              r((e) => !e);
            },
            children: [
              l.jsx("p", { className: "font-semibold border", children: e }),
              l.jsx("div", {
                className: "ml-4",
                children:
                  t &&
                  s.map((e, s) => l.jsx(C, { name: e.name, sets: e.sets }, s)),
              }),
            ],
          });
        },
        C = ({ name: e, sets: s }) =>
          (0, l.jsxs)("li", {
            children: [
              l.jsx("p", { className: "underline", children: e }),
              l.jsx("ul", {
                className: "ml-4",
                children: s.map((e, s) =>
                  (0, l.jsxs)(
                    "li",
                    {
                      className: "flex gap-2",
                      children: [
                        l.jsx("p", { children: s + 1 }),
                        (0, l.jsxs)("p", {
                          children: [e.weight, "kg x ", e.rep],
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          }),
        S = ({ sessions: e }) =>
          (0, l.jsxs)("div", {
            className: "flex flex-col items-center gap-4 w-4/5",
            children: [
              l.jsx("h2", {
                className: "font-bold text-4xl text-center",
                children: "History",
              }),
              0 === e.length
                ? l.jsx("div", {
                    className: " w-4/5",
                    children: l.jsx("p", {
                      className: "text-center",
                      children: "No data",
                    }),
                  })
                : l.jsx(v, { sessions: e }),
            ],
          });
    },
    2029: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => a });
      var l = t(9510);
      function a({ children: e }) {
        return l.jsx("html", {
          lang: "en",
          children: l.jsx("body", { children: e }),
        });
      }
      t(5023);
    },
    5023: () => {},
  });
