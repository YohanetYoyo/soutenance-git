/**
 * Calcule des statistiques simples à partir d'une liste de tâches.
 * @param {Array<{status: string}>} tasks
 * @returns {{total: number, done: number, inProgress: number, todo: number}}
 */
function getTaskStats(tasks) {
  const stats = { total: tasks.length, done: 0, inProgress: 0, todo: 0 };

  for (const task of tasks) {
    if (task.status === "done") {
      stats.done += 1;
    } else if (task.status === "in-progress") {
      stats.inProgress += 1;
    } else {
      stats.todo += 1;
    }
  }

  return stats;
}

module.exports = { getTaskStats };
