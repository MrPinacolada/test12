<template>
  <div class="modal">
    <div class="modal-content">
      <div class="loader_span" v-if="!comment">
        <span class="loader"></span>
      </div>
      <h2>Comment Details</h2>
      <section class="row_section"></section>
      <p><strong>ID:</strong> {{ comment.postId }}</p>
      <p><strong>PostID:</strong> {{ comment.id }}</p>
      <p><strong>Name:</strong> {{ comment.name }}</p>
      <p><strong>Email:</strong> {{ comment.email }}</p>
      <p><strong>Body:</strong></p>
      <textarea disabled re cols="30" rows="10">{{ comment.body }}</textarea>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  setup() {
    const route = useRoute();
    let comment = route.query;
    const closeModal = () => {
      window.close();
    };
    return { comment, closeModal };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  display: grid;
  border-radius: 4px;
  align-items: center;
  justify-items: center;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
.loader_span {
  background-color: #555;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
textarea {
  resize: none;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}
</style>
