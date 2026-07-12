const VALID_STATUSES = ["todo", "in-progress", "done"];

/**
 * Met à jour une tâche existante avec de nouvelles valeurs, après validation.
 * @param {{id: number, title: string, description: string, status: string}} task
 * @param {{title?: string, description?: string, status?: string}} updates
 * @returns {{id: number, title: string, description: string, status: string}}
 */
function updateTask(task, updates) {
  if (updates.title !== undefined && updates.title.trim() === "") {
    throw new Error("Le titre ne peut pas être vide");
  }
  if (updates.status !== undefined && !VALID_STATUSES.includes(updates.status)) {
    throw new Error(`Statut invalide : ${updates.status}`);
  }

  return {
    ...task,
    title: updates.title !== undefined ? updates.title : task.title,
    description: updates.description !== undefined ? updates.description : task.description,
    status: updates.status !== undefined ? updates.status : task.status,
  };
}

module.exports = { updateTask };
