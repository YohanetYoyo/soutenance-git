const VALID_STATUSES = ["todo", "in-progress", "done"];

/**
 * Change le statut d'une tâche si le nouveau statut est valide.
 * @param {{id: number, status: string}} task
 * @param {string} newStatus
 * @returns {{id: number, status: string}}
 */
function changeTaskStatus(task, newStatus) {
  if (!VALID_STATUSES.includes(newStatus)) {
    throw new Error(`Statut invalide : ${newStatus}`);
  }
  return { ...task, status: newStatus };
}

module.exports = { changeTaskStatus, VALID_STATUSES };
