import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getFeedbacks,
  deleteFeedback,
} from "../services/feedbackService";

/**
 * Custom hook for managing feedback data.
 */
const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch all feedback entries.
   */
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getFeedbacks();

      setFeedbacks(data);
    } catch (error) {
      toast.error("Failed to load feedback.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Delete a feedback entry.
   * @param {number|string} id
   */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (!confirmDelete) return;

    try {
      await deleteFeedback(id);

      toast.success("Feedback deleted.");

      fetchFeedbacks();
    } catch (error) {
      toast.error("Delete failed.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return {
    feedbacks,
    loading,
    fetchFeedbacks,
    handleDelete,
  };
};

export default useFeedback;