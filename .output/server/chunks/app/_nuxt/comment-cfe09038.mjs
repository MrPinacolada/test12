import { mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal" }, _attrs))}><div class="modal-content"><h2>Comment Details</h2><p><strong>ID:</strong> ${ssrInterpolate($setup.comment.postId)}</p><p><strong>PostID:</strong> ${ssrInterpolate($setup.comment.id)}</p><p><strong>Name:</strong> ${ssrInterpolate($setup.comment.name)}</p><p><strong>Email:</strong> ${ssrInterpolate($setup.comment.email)}</p><p><strong>Body:</strong> ${ssrInterpolate($setup.comment.body)}</p><button>Close</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/comment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { comment as default };
//# sourceMappingURL=comment-cfe09038.mjs.map
