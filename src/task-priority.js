const VALID_PRIORITIES = ["low", "medium", "high"];

/**
 * Change la priorité d'une tâche si la priorité est valide.
 * @param {{id: number, priority: string}} task
 * @param {string} newPriority
 * @returns {{id: number, priority: string}}
 */
function changeTaskPriority(task, newPriority) {
  if (!VALID_PRIORITIES.includes(newPriority)) {
    throw new Error(`Priorité invalide : ${newPriority}`);
  }
  return { ...task, priority: newPriority };
}

module.exports = { changeTaskPriority, VALID_PRIORITIES };
