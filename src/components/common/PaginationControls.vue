<script lang="ts" setup>
interface Props {
  pages: number;
  currentPage: number;
}

defineProps<Props>();

defineEmits<{
  (e: "selectPage", page: number): void;
}>();
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li>
        <span
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="
            $emit('selectPage', currentPage > 1 ? currentPage - 1 : currentPage)
          "
        >
          <span class="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            class="w-2.5 h-2.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </span>
      </li>
      <li v-for="i in pages">
        <span
          v-if="i == currentPage"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-primary-dark/25"
          @click="$emit('selectPage', i)"
        >
          {{ i }}
        </span>
        <span
          v-else
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          @click="$emit('selectPage', i)"
        >
          {{ i }}
        </span>
      </li>
      <li>
        <span
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="
            $emit(
              'selectPage',
              currentPage < pages ? currentPage + 1 : currentPage,
            )
          "
        >
          <span class="sr-only">Next</span>
          <svg
            aria-hidden="true"
            class="w-2.5 h-2.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </span>
      </li>
    </ul>
  </nav>
</template>
