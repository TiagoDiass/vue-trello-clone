<template>
  <div class="board-view view">
    <h1 class="display-3 text-uppercase text-center">Seu Quadro</h1>

    <main>
      <div class="board">
        <h3 class="board-title">A fazer</h3>
        <Container
          group-name="trello"
          class="drag-container"
          @drag-start="handleDragStart('todo', $event)"
          @drop="handleDrop('todo', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'drop-placeholder' }"
          drag-class="task-ghost"
          drop-class="task-ghost-drop"
        >
          <Draggable v-for="(task, index) in tasks.todo" :key="index">
            <div class="task">
              <h3>{{ task.text }}</h3>
            </div>
          </Draggable>
        </Container>
      </div>

      <div class="board">
        <h3 class="board-title">Fazendo</h3>
        <Container
          group-name="trello"
          class="drag-container"
          @drag-start="handleDragStart('doing', $event)"
          @drop="handleDrop('doing', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'drop-placeholder' }"
          drag-class="task-ghost"
          drop-class="task-ghost-drop"
        >
          <Draggable v-for="(task, index) in tasks.doing" :key="index">
            <div class="task">
              <h3>{{ task.text }}</h3>
            </div>
          </Draggable>
        </Container>
      </div>

      <div class="board">
        <h3 class="board-title">Feito</h3>
        <Container
          group-name="trello"
          class="drag-container"
          @drag-start="handleDragStart('done', $event)"
          @drop="handleDrop('done', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'drop-placeholder' }"
          drag-class="task-ghost"
          drop-class="task-ghost-drop"
        >
          <Draggable v-for="(task, index) in tasks.done" :key="index">
            <div class="task">
              <h3>{{ task.text }}</h3>
            </div>
          </Draggable>
        </Container>
      </div>
    </main>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';

export default {
  components: {
    Container,
    Draggable,
  },

  data: () => ({
    tasks: {
      todo: [
        {
          text: 'Fazer café',
        },
        {
          text: 'Mexer no facebook',
        },
      ],

      doing: [
        {
          text: 'Comendo',
        },
        {
          text: 'COdando',
        },
      ],

      done: [
        {
          text: 'ir pro cinema',
        },
      ],
    },

    draggingTask: {
      lane: '',
      index: -1,
      taskData: {},
    },
  }),

  methods: {
    handleDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult;
      if (isSource) {
        this.draggingTask = {
          index: payload.index,
          taskData: { ...this.tasks[lane][payload.index] },
        };
      }
    },

    handleDrop(lane, dropResult) {
      const { removedIndex, addedIndex } = dropResult;

      if (lane == this.draggingTask.lane && removedIndex === addedIndex) {
        return;
      }

      if (removedIndex !== null) {
        this.tasks[lane].splice(removedIndex, 1);
      }

      if (addedIndex !== null) {
        this.tasks[lane].splice(addedIndex, 0, this.draggingTask.taskData);
      }
    },

    getChildPayload(index) {
      return {
        index,
      };
    },
  },
};
</script>

<style></style>
