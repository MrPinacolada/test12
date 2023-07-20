<template>
  <div class="wrapper">
    <table class="table">
      <thead>
        <tr>
          <th @click="Sortid">
            ID
            <span v-if="sortid === 'asc'">&#9650;</span>
            <span v-else-if="sortid === 'desc'">&#9660;</span>
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <NuxtLink
          v-for="comment in comments"
          :key="comment.id"
          target="_blank"
          :to="{ path: '/comment', query: comment }"
          class="table-row-link"
        >
          <tr>
            <td>{{ comment.id }}</td>
            <td>{{ comment.name }}</td>
            <td>{{ comment.email }}</td>
          </tr>
        </NuxtLink>
      </tbody>
    </table>
    <PAGINATOR
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const perPage = 10;
    const currentPage = ref(1);
    const comments = ref(null);
    const totalPages = ref(0);
    const sortid = ref("asc");

    const fetchComments = async (page) => {
      try {
        const axios = (await import("axios")).default;
        // строка сверху костыль, nuxt выдавал тонну ошибок если импортировать по человечьи
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              _page: page,
              _limit: perPage,
              _sort: "id",
              _order: sortid.value,
            },
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

    onMounted(() => {
      fetchComments(currentPage.value);
    });

    return {
      perPage,
      currentPage,
      comments,
      totalPages,
      fetchComments,
      changePage,
      sortid,
      Sortid,
    };
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
.table {
  width: 85%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  color: #333;
}

tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
.table-row-link {
  display: contents;
}

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
a {
  text-decoration: none;
  color: inherit;
}
</style>
