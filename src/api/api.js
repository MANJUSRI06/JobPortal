export async function fetchJobs({ delay = 400 } = {}) {
  await new Promise((r) => setTimeout(r, delay));
  const data = await import('./jobs.json');
  return JSON.parse(JSON.stringify(data.default || data));
}
