/**
 * Filtre une liste de tâches par statut.
 * @param {Array<{status: string}>} tasks
 * @param {string} status
 * @returns {Array<{status: string}>}
 */
function filterTasksByStatus(tasks, status) {
  return tasks.filter((task) => task.status === status);
}

module.exports = { filterTasksByStatus };
