<template>
  <div class="rounded-md w-full h-full">
    <div
      class="flex items-center gap-1 border rounded-md w-full px-1 h-10 bg-background sticky top-0 mb-2"
      v-if="editor"
    >
      <Button
        size="icon"
        variant="ghost"
        :class="{
          active: editor.isActive('heading', { level: 1 }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        <LucideHeading1 class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        :class="{
          active: editor.isActive('heading', { level: 2 }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <LucideHeading2 class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        :class="{
          active: editor.isActive('heading', { level: 3 }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <LucideHeading3 class="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" />
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{
          active: editor.isActive('bold'),
        }"
      >
        <LucideBold class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{
          active: editor.isActive('italic'),
        }"
      >
        <LucideItalic class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{
          active: editor.isActive('strike'),
        }"
      >
        <LucideStrikethrough class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{
          active: editor.isActive('underline'),
        }"
      >
        <LucideUnderline class="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" />
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{
          active: editor.isActive('bulletList'),
        }"
      >
        <LucideList class="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{
          active: editor.isActive('orderedList'),
        }"
      >
        <LucideListOrdered class="w-4 h-4" />
      </Button>
      <!-- tasklist -->
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleTaskList().run()"
        :class="{
          active: editor.isActive('taskList'),
        }"
      >
        <LucideListCheck class="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" />
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{
          active: editor.isActive('codeBlock'),
        }"
      >
        <LucideCode class="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" />
      <!-- superscript -->
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleSuperscript().run()"
        :class="{
          active: editor.isActive('superscript'),
        }"
      >
        <LucideSuperscript class="w-4 h-4" />
      </Button>
      <!-- subscript -->
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().toggleSubscript().run()"
        :class="{
          active: editor.isActive('subscript'),
        }"
      >
        <LucideSubscript class="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" />
      <!-- horizontal rule -->
      <Button
        size="icon"
        variant="ghost"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        <LucideSquareSplitHorizontal class="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" @click="showImageModal = true">
        <LucideImage class="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" @click="showTableModal = true">
        <LucideTable class="w-4 h-4" />
      </Button>

      <div class="button-group hidden">
        <Button
          size="icon"
          @click="
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          "
        >
          <LucideTable class="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().addColumnBefore().run()"
        >
          <LucideColumns class="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().addColumnAfter().run()"
        >
          <LucideColumns4 class="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().deleteColumn().run()"
        >
          DC
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().addRowBefore().run()"
        >
          <LucideRows class="w-4 h-4" />
        </Button>
        <Button size="icon" @click="editor.chain().focus().addRowAfter().run()">
          <LucideRows4 class="w-4 h-4" />
        </Button>
        <Button size="icon" @click="editor.chain().focus().deleteRow().run()">
          DR
        </Button>
        <Button size="icon" @click="editor.chain().focus().deleteTable().run()">
          <LucideGrid2x2X class="w-4 h-4" />
        </Button>
        <Button size="icon" @click="editor.chain().focus().mergeCells().run()">
          <LucideTableCellsMerge class="w-4 h-4" />
        </Button>
        <Button size="icon" @click="editor.chain().focus().splitCell().run()">
          <LucideTableCellsSplit class="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().toggleHeaderColumn().run()"
        >
          TH
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().toggleHeaderRow().run()"
        >
          TH
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().toggleHeaderCell().run()"
        >
          TD
        </Button>
        <Button @click="editor.chain().focus().mergeOrSplit().run()">
          Merge or split
        </Button>
        <Button
          @click="editor.chain().focus().setCellAttribute('colspan', 2).run()"
        >
          Set cell attribute
        </Button>
        <Button @click="editor.chain().focus().fixTables().run()">
          Fix tables
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().goToNextCell().run()"
        >
          <LucideChevronRight class="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          @click="editor.chain().focus().goToPreviousCell().run()"
        >
          <LucideChevronLeft class="w-4 h-4" />
        </Button>
      </div>
    </div>
    <editor-content :editor="editor" />

    <!-- Image Modal -->
    <Dialog :open="showImageModal" @update:open="showImageModal = false">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
          <DialogDescription>
            Enter the URL of the image you want to insert
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="imageUrl" class="text-right">URL</Label>
            <Input
              id="imageUrl"
              v-model="imageUrl"
              placeholder="https://example.com/image.jpg"
              class="col-span-3"
            />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="altText" class="text-right">Alt Text</Label>
            <Input
              id="altText"
              v-model="imageAlt"
              placeholder="Image description"
              class="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button @click="insertImage">Insert Image</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Table Modal -->
    <Dialog :open="showTableModal" @update:open="showTableModal = false">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Insert Table</DialogTitle>
          <DialogDescription>
            Select the dimensions for your table
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="rows" class="text-right">Rows</Label>
            <Input
              id="rows"
              v-model="tableRows"
              type="number"
              min="1"
              max="10"
              class="col-span-3"
            />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="cols" class="text-right">Columns</Label>
            <Input
              id="cols"
              v-model="tableCols"
              type="number"
              min="1"
              max="10"
              class="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button @click="insertTable">Insert Table</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import HardBreak from "@tiptap/extension-hard-break";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import OrderedList from "@tiptap/extension-ordered-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Youtube from "@tiptap/extension-youtube";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

import { common, createLowlight } from "lowlight";

import { useEditor, EditorContent } from "@tiptap/vue-3";
import { LucideHeading1 } from "lucide-vue-next";
import { LucideList } from "lucide-vue-next";
import { LucideListCheck } from "lucide-vue-next";
import { LucideSquareSplitHorizontal } from "lucide-vue-next";
import { LucideColumns4 } from "lucide-vue-next";
import { LucideGrid2x2X } from "lucide-vue-next";
import { LucideTableCellsMerge } from "lucide-vue-next";

const lowlight = createLowlight(common);

const props = defineProps({
  modelValue: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["update:modelValue", "update:rawText"]);

watch(
  () => props.modelValue,
  (value) => {
    // HTML
    const isSame = editor.value.getJSON() === value;

    if (isSame) {
      return;
    }

    editor.value.commands.setContent(value, false);
  }
);

const editor = useEditor({
  extensions: [
    Document,
    Paragraph,
    Text,
    Blockquote,
    BulletList,
    CodeBlockLowlight.configure({ lowlight }),
    HardBreak,
    HorizontalRule,
    ListItem,
    OrderedList,
    TaskList,
    TaskItem,
    Image,
    Youtube,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Heading.configure({ levels: [1, 2, 3] }),
    Bold,
    Italic,
    Strike,
    Underline,
    Subscript,
    Superscript,
  ],
  content: props.modelValue,
  onUpdate: () => {
    emit("update:modelValue", editor.value.getJSON());
    emit("update:rawText", editor.value.getText());
  },
});

onMounted(() => {
  emit("update:rawText", editor.value.getText());
});

onBeforeUnmount(() => {
  editor.value.destroy();
});

const showImageModal = ref(false);
const showTableModal = ref(false);
const imageUrl = ref("");
const imageAlt = ref("");
const tableRows = ref(3);
const tableCols = ref(3);

const insertImage = () => {
  if (imageUrl.value) {
    editor.value
      .chain()
      .focus()
      .setImage({
        src: imageUrl.value,
        alt: imageAlt.value,
      })
      .run();
    imageUrl.value = "";
    imageAlt.value = "";
    showImageModal.value = false;
  }
};

const insertTable = () => {
  editor.value
    .chain()
    .focus()
    .insertTable({
      rows: parseInt(tableRows.value),
      cols: parseInt(tableCols.value),
      withHeaderRow: true,
    })
    .run();
  showTableModal.value = false;
};

const addColumnBefore = () =>
  editor.value.chain().focus().addColumnBefore().run();
const addColumnAfter = () =>
  editor.value.chain().focus().addColumnAfter().run();
const deleteColumn = () => editor.value.chain().focus().deleteColumn().run();
const addRowBefore = () => editor.value.chain().focus().addRowBefore().run();
const addRowAfter = () => editor.value.chain().focus().addRowAfter().run();
const deleteRow = () => editor.value.chain().focus().deleteRow().run();
const deleteTable = () => editor.value.chain().focus().deleteTable().run();
const mergeCells = () => editor.value.chain().focus().mergeCells().run();
const splitCell = () => editor.value.chain().focus().splitCell().run();
</script>

<style scoped>
.active {
  @apply bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground;
}

button {
  @apply my-1;
}
</style>

<style lang="scss">
.ProseMirror-focused {
  @apply outline-none;
}

.ProseMirror {
  :first-child {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: disc;
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      /* margin-top: 0.25em;
      margin-bottom: 0.25em; */
    }
  }

  ol {
    @apply list-decimal;
  }

  h1 {
    @apply text-3xl font-bold mt-4 mb-2;
  }

  h2 {
    @apply text-2xl font-bold mt-3 mb-2;
  }

  h3 {
    @apply text-xl font-bold mt-2 mb-1;
  }

  /* Code and preformatted text styles */
  code {
    @apply bg-muted text-muted-foreground;
    border-radius: 0.4rem;
    color: var(--black);
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    @apply bg-muted text-muted-foreground;
    border-radius: 0.5rem;
    font-family: "JetBrainsMono", monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    @apply border-l-2 border-border;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    @apply border-t-2 border-border;
    margin: 2rem 0;
  }

  table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    td,
    th {
      @apply border-2 border-border;
      box-sizing: border-box;
      min-width: 1em;
      padding: 3px 5px;
      position: relative;
      vertical-align: top;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      background-color: var(--gray-1);
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>
