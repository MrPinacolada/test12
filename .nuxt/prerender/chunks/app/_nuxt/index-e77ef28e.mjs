import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString } from 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/pathe/dist/index.mjs';

const _sfc_main$2 = {
  name: "PAGINATOR",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    perSubset: {
      type: Number,
      default: 5
    }
  },
  // пропсы прописывал как в ts, я хз так ли должно быть в js 
  computed: {
    pages() {
      const totalPages = this.totalPages;
      const currentPage = this.currentPage;
      const perSubset = this.perSubset;
      const currentSubset = Math.ceil(currentPage / perSubset);
      const startPage = (currentSubset - 1) * perSubset + 1;
      const endPage = Math.min(startPage + perSubset - 1, totalPages);
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },
    showPreviousSubset() {
      return this.currentPage > this.perSubset;
    },
    showNextSubset() {
      return this.currentPage + this.perSubset <= this.totalPages;
    }
  },
  methods: {
    changePage(page) {
      this.$emit("page-change", page);
    },
    previousSubset() {
      const previousSubsetPage = this.currentPage - this.perSubset;
      this.changePage(previousSubsetPage);
    },
    nextSubset() {
      const nextSubsetPage = this.currentPage + this.perSubset;
      this.changePage(nextSubsetPage);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}><!--[-->`);
  ssrRenderList($options.pages, (page) => {
    _push(`<button class="${ssrRenderClass([{ active: page === $props.currentPage }, "pagination-button"])}">${ssrInterpolate(page)}</button>`);
  });
  _push(`<!--]-->`);
  if ($options.showPreviousSubset) {
    _push(`<button class="pagination-button"> \xAB </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.showNextSubset) {
    _push(`<button class="pagination-button"> \xBB </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PAGINATOR.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  setup() {
    const perPage = 10;
    const currentPage = ref(1);
    const comments = ref(null);
    const totalPages = ref(0);
    const sortid = ref("asc");
    const fetchComments = async (page) => {
      try {
        const axios = (await import('file://C:/Users/Bob/Desktop/testing/test12/node_modules/axios/index.js')).default;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              _page: page,
              _limit: perPage,
              _sort: "id",
              _order: sortid.value
            }
          }
        );
        comments.value = response.data;
        const totalCount = response.headers["x-total-count"];
        totalPages.value = Math.ceil(totalCount / perPage);
      } catch (error) {
        console.error("Error with fetch: ", error);
      }
    };
    const Sortid = () => {
      sortid.value = sortid.value === "asc" ? "desc" : "asc";
      fetchComments(currentPage.value);
    };
    const changePage = (page) => {
      currentPage.value = page;
      fetchComments(page);
    };
    return {
      perPage,
      currentPage,
      comments,
      totalPages,
      fetchComments,
      changePage,
      sortid,
      Sortid
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_PAGINATOR = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><table class="table"><thead><tr><th> ID `);
  if ($setup.sortid === "asc") {
    _push(`<span>\u25B2</span>`);
  } else if ($setup.sortid === "desc") {
    _push(`<span>\u25BC</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</th><th>Name</th><th>Email</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($setup.comments, (comment) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: comment.id,
      target: "_blank",
      to: { path: "/comment", query: comment },
      class: "table-row-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(comment.id)}</td><td${_scopeId}>${ssrInterpolate(comment.name)}</td><td${_scopeId}>${ssrInterpolate(comment.email)}</td></tr>`);
        } else {
          return [
            createVNode("tr", null, [
              createVNode("td", null, toDisplayString(comment.id), 1),
              createVNode("td", null, toDisplayString(comment.name), 1),
              createVNode("td", null, toDisplayString(comment.email), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></tbody></table>`);
  _push(ssrRenderComponent(_component_PAGINATOR, {
    "current-page": $setup.currentPage,
    "total-pages": $setup.totalPages,
    onPageChange: $setup.changePage
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tableview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "IndexPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tableview = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Tableview, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-e77ef28e.mjs.map
