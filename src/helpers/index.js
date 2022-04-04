export async function sleep (time) {
  return await new Promise(r => setTimeout(r, time)); // simulate sleep
}
