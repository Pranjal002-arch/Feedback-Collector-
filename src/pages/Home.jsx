import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import FeedbackForm from "../components/feedback/FeedbackForm";
import FeedbackList from "../components/feedback/FeedbackList";

import {
  getFeedbacks,
  deleteFeedback,
} from "../services/feedbackService";

import { APP_NAME } from "../constants";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch all feedbacks from Supabase
   */
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getFeedbacks();

      setFeedbacks(data || []);
    } catch (error) {
      toast.error("Failed to load feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  /**
   * Delete feedback
   */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this feedback?")) return;

    try {
      await deleteFeedback(id);

      setFeedbacks((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Feedback deleted.");
    } catch (error) {
      toast.error("Delete failed.");
    }
  };

  return (
    <main className="min-h-screen bg-[#EEF5FB]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Page Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-slate-900">
            {APP_NAME}
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Collect and manage user feedback with ease.
          </p>

        </div>

        {/* Feedback Form */}

        <FeedbackForm
          onFeedbackAdded={fetchFeedbacks}
        />

        {/* Feedback List */}

        <div className="mt-12">

          <FeedbackList
            feedbacks={feedbacks}
            loading={loading}
            onDelete={handleDelete}
          />

        </div>

      </div>

    </main>
  );
};

export default Home;