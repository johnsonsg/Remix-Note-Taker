var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/main.css
var main_default = "/build/_assets/main-MUQ54GBT.css";

// app/components/Navigtion/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), MainNavigation = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", {
  id: "main-navigation",
  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
        className: "nav-item",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, {
          to: "/",
          children: "Home"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
        className: "nav-item",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, {
          to: "/notes",
          children: "My Notes"
        })
      })
    ]
  })
}), MainNavigation_default = MainNavigation;

// app/root.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", {
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MainNavigation_default, {})
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
        ]
      })
    ]
  });
}
function CatchBoundary({ error }) {
  var _a;
  let caughtResponse = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("title", {
            children: caughtResponse.statusText
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", {
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MainNavigation_default, {})
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", {
                children: caughtResponse.statusText
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, {
                    to: "/",
                    children: "safety"
                  }),
                  "!"
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
        ]
      })
    ]
  });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("title", {
            children: "An error occured."
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", {
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MainNavigation_default, {})
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", {
                children: "An error occured."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                children: error.message
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, {
                    to: "/",
                    children: "safetyssss"
                  }),
                  "!"
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
        ]
      })
    ]
  });
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}

// app/routes/notes.$noteId.jsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  default: () => NoteDetailsPage,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");

// app/data/notes.js
var import_promises = __toESM(require("fs/promises"));
async function getStoredNotes() {
  let rawFileContent = await import_promises.default.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return import_promises.default.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// app/styles/noteDetails.css
var noteDetails_default = "/build/_assets/noteDetails-36A3ULZZ.css";

// app/routes/notes.$noteId.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function NoteDetailsPage() {
  let note = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("main", {
    id: "note-details",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", {
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom.Link, {
              to: "/notes",
              children: "Back to all Notes"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", {
            children: note.title
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", {
        id: "note-details-content",
        children: note.content
      })
    ]
  });
}
async function loader({ params }) {
  let notes = await getStoredNotes(), noteId = params.noteId, selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote)
    throw (0, import_node2.json)(
      { message: "Could not find note for id " + noteId },
      {
        status: 404
      }
    );
  return selectedNote;
}
function links2() {
  return [{ rel: "stylesheet", href: noteDetails_default }];
}
function meta2({ data, params }) {
  return {
    title: data.title,
    description: "Manange your notes with ease!"
  };
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3
});
var import_react5 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-UML5FHT4.css";

// app/routes/index.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("main", {
    id: "content",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", {
        children: "A better way of keeping track of your notes"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
        children: "Try our early beta and never loose track of your notes again!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
        id: "cta",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, {
          to: "/notes",
          children: "Try Now!"
        })
      })
    ]
  });
}
function links3() {
  return [{ rel: "stylesheet", href: home_default }];
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => NotesPage,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta3
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/Notes/NewNote.jsx
var import_react6 = require("@remix-run/react");

// app/components/Notes/NewNote.css
var NewNote_default = "/build/_assets/NewNote-N3P7GNET.css";

// app/components/Notes/NewNote.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function NewNote() {
  let data = (0, import_react6.useActionData)(), isSubmitting = (0, import_react6.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react6.Form, {
    method: "post",
    id: "note-form",
    children: [
      (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
        children: data.message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", {
            htmlFor: "title",
            children: "Title"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
            type: "text",
            id: "title",
            name: "title",
            required: !0
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", {
            htmlFor: "content",
            children: "Content"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("textarea", {
            id: "content",
            name: "content",
            rows: "5",
            required: !0
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
        className: "form-actions",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", {
          disabled: isSubmitting,
          children: isSubmitting ? "Adding..." : "Add Note"
        })
      })
    ]
  });
}
var NewNote_default2 = NewNote;
function links4() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/components/Notes/NoteList.jsx
var import_react7 = require("@remix-run/react");

// app/components/Notes/NoteList.css
var NoteList_default = "/build/_assets/NoteList-4M2RDIJ7.css";

// app/components/Notes/NoteList.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", {
    id: "note-list",
    children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", {
      className: "note",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react7.Link, {
        to: note.id,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", {
                  className: "note-meta",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", {
                      children: [
                        "#",
                        index + 1
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("time", {
                        dateTime: note.id,
                        children: new Date(note.id).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", {
                  children: note.title
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
              children: note.content
            })
          ]
        })
      })
    }, note.id))
  });
}
var NoteList_default2 = NoteList;
function links5() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function NotesPage() {
  let notes = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NewNote_default2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NoteList_default2, {
        notes
      })
    ]
  });
}
async function loader2() {
  let notes = await getStoredNotes();
  if (!notes || notes.length === 0)
    throw (0, import_node3.json)(
      { message: "Could not find any notes." },
      {
        status: 404,
        statusText: "Not Found"
      }
    );
  return notes;
}
async function action({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 5)
    return { message: "Invalid title - must be at least 5 characters long." };
  let existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), await new Promise((resolve, reject) => setTimeout(() => resolve(), 1e3)), (0, import_node3.redirect)("/notes");
}
function links6() {
  return [...links4(), ...links5()];
}
function meta3() {
  return {
    title: "All Notes",
    description: "Manange your notes with ease!"
  };
}
function CatchBoundary2() {
  var _a;
  let message = ((_a = (0, import_react8.useCatch)().data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NewNote_default2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
        className: "info-message",
        children: message
      })
    ]
  });
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", {
    className: "error",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", {
        children: "An error related to your notes occurred!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
        children: error.message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", {
        children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react8.Link, {
            to: "/",
            children: "safety"
          }),
          "!"
        ]
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "907695fa", entry: { module: "/build/entry.client-QEJ47S7R.js", imports: ["/build/_shared/chunk-NW3OSAR6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4AKALU7C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DLCVKSGW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-BUUE4H2D.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "root", path: "notes/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-FKVPWPJ5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-907695FA.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "root",
    path: "notes/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
