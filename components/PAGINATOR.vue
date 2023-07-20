<template>
  <div class="pagination">
    <button
      v-for="page in pages"
      :key="page"
      class="pagination-button"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      v-if="showPreviousSubset"
      class="pagination-button"
      @click="previousSubset"
    >
      &laquo;
    </button>

    <button v-if="showNextSubset" class="pagination-button" @click="nextSubset">
      &raquo;
    </button>
    <button v-if="currentPage > 1" class="pagination-button" @click="goBack">
      Назад
    </button>
  </div>
</template>

<script>
export default {
  name: "PAGINATOR",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perSubset: {
      type: Number,
      default: 5,
    },
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
    },
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
    },
    goBack() {
      this.changePage(1);
    },
  },
};
</script>

<style>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-button {
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  cursor: pointer;
}

.pagination-button:hover {
  background-color: #f5f5f5;
}

.pagination-button.active {
  background-color: #333;
  color: #fff;
}
</style>
