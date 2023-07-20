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
            <td>
              <div
                class="circle"
                :class="{
                  circle: comment.id <= 99,
                  cloud: comment.id > 99,
                  blue: comment.id <= 50,
                  green: comment.id > 50 && comment.id <= 100,
                  orange: comment.id > 100 && comment.id <= 150,
                  red: comment.id > 150,
                }"
              >
                {{ comment.id }}
              </div>
            </td>
            <td>{{ comment.name }}</td>
            <td>
              <div
                class="cloud"
                :class="{
                  green: comment.id <= 50,
                  blue: comment.id > 50 && comment.id <= 100,
                  red: comment.id > 100 && comment.id <= 150,
                  orange: comment.id > 150,
                }"
              >
                {{ comment.email }}
              </div>
            </td>
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
.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
}

.circle span {
  line-height: 1;
  vertical-align: middle;
}

.cloud {
  display: inline-block;
  padding: 4px 8px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 20px;
}
.circle.blue {
  background-color: #3498db;
}

.circle.green {
  background-color: #2ecc71;
}

.circle.orange {
  background-color: #e67e22;
}

.circle.red {
  background-color: #e74c3c;
}

.cloud.blue {
  background-color: #3498db;
  color: #fff;
}

.cloud.green {
  background-color: #2ecc71;
  color: #fff;
}

.cloud.orange {
  background-color: #e67e22;
  color: #fff;
}

.cloud.red {
  background-color: #e74c3c;
  color: #fff;
}
</style>
