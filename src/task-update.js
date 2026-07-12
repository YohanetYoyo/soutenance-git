/**
 * Met à jour une tâche existante avec de nouvelles valeurs.
 * @param {{id: number, title: string, description: string, status: string}} task
 * @param {{title?: string, description?: string, status?: string}} updates
 * @returns {{id: number, title: string, description: string, status: string}}
 */
function updateTask(task, updates) {
  return {
    ...task,
    title: updates.title !== undefined ? updates.title : task.title,
    description: updates.description !== undefined ? updates.description : task.description,
    status: updates.status !== undefined ? updates.status : task.status,
  };
}

module.exports = { updateTask };
