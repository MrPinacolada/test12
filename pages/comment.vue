<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Comment Details</h2>
      <p><strong>ID:</strong> {{ comment.postId }}</p>
      <p><strong>PostID:</strong> {{ comment.id }}</p>
      <p><strong>Name:</strong> {{ comment.name }}</p>
      <p><strong>Email:</strong> {{ comment.email }}</p>
      <p><strong>Body:</strong> {{ comment.body }}</p>
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
  border-radius: 4px;
  text-align: center;
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
</style>
