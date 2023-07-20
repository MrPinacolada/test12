import { mergeProps, useSSRContext } from 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue/index.mjs';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Bob/Desktop/testing/test12/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {
  name: "comment",
  setup() {
    const route = useRoute();
    let comment2 = route.query;
    const closeModal = () => {
      window.close();
    };
    return { comment: comment2, closeModal };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal" }, _attrs))}><div class="modal-content">`);
  if (!$setup.comment) {
    _push(`<div class="loader_span"><span class="loader"></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h2>Comment Details</h2><section class="row_section"></section><p><strong>ID:</strong> ${ssrInterpolate($setup.comment.postId)}</p><p><strong>PostID:</strong> ${ssrInterpolate($setup.comment.id)}</p><p><strong>Name:</strong> ${ssrInterpolate($setup.comment.name)}</p><p><strong>Email:</strong> ${ssrInterpolate($setup.comment.email)}</p><p><strong>Body:</strong></p><textarea disabled re cols="30" rows="10">${ssrInterpolate($setup.comment.body)}</textarea><button>Close</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/comment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { comment as default };
//# sourceMappingURL=comment-60acbe25.mjs.map
