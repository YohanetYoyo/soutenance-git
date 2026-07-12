/**
 * Recherche des tâches dont le titre ou la description contient le mot-clé.
 * @param {Array<{title: string, description: string}>} tasks
 * @param {string} keyword
 * @returns {Array<{title: string, description: string}>}
 */
function searchTasks(tasks, keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return tasks.filter((task) => {
    const title = task.title ? task.title.toLowerCase() : "";
    const description = task.description ? task.description.toLowerCase() : "";
    return title.includes(lowerKeyword) || description.includes(lowerKeyword);
  });
}

module.exports = { searchTasks };
