/**
 * Supprime une tâche d'une liste à partir de son identifiant.
 * @param {Array<{id: number}>} tasks
 * @param {number} taskId
 * @returns {Array<{id: number}>} la nouvelle liste sans la tâche supprimée
 */
function deleteTask(tasks, taskId) {
  const taskExists = tasks.some((task) => task.id === taskId);
  if (!taskExists) {
    throw new Error(`Aucune tâche trouvée avec l'id ${taskId}`);
  }
  return tasks.filter((task) => task.id !== taskId);
}

module.exports = { deleteTask };
