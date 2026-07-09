import { supabase } from "./supabase";

/**
 * Fetches all feedback entries from the Supabase database.
 *
 * @returns {Promise<Array>} List of feedback records.
 * @throws {Error} Throws an error if the fetch request fails.
 */
export const getFeedbacks = async () => {
  const { data, error } = await supabase
    .from("feedbacks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

/**
 * Inserts a new feedback record into the database.
 *
 * @param {Object} feedback - Feedback details.
 * @param {string} feedback.name - User's name.
 * @param {string} feedback.email - User's email.
 * @param {string} feedback.message - User's feedback message.
 * @returns {Promise<Array>} Newly created feedback record.
 * @throws {Error} Throws an error if insertion fails.
 */
export const addFeedback = async (feedback) => {
  const { data, error } = await supabase
    .from("feedbacks")
    .insert([feedback])
    .select();

  if (error) throw error;

  return data;
};

/**
 * Deletes a feedback record using its unique ID.
 *
 * @param {string} id - Feedback ID.
 * @returns {Promise<void>}
 * @throws {Error} Throws an error if deletion fails.
 */
export const deleteFeedback = async (id) => {
  const { error } = await supabase
    .from("feedbacks")
    .delete()
    .eq("id", id);

  if (error) throw error;
};