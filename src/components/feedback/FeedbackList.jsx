import { useState } from "react";
import FeedbackItem from "./FeedbackItem";

/**
 * Displays the list of feedback entries.
 *
 * @param {Object} props
 * @param {Array} props.feedbacks
 * @param {boolean} props.loading
 * @param {Function} props.onDelete
 */
const FeedbackList = ({
  feedbacks,
  loading,
  onDelete,
}) => {
  const [keyword, setKeyword] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Filter feedback by keyword and date
  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const matchesKeyword =
      feedback.name?.toLowerCase().includes(keyword.toLowerCase()) ||
      feedback.email?.toLowerCase().includes(keyword.toLowerCase()) ||
      feedback.message?.toLowerCase().includes(keyword.toLowerCase());

    const matchesDate =
      selectedDate === "" ||
      feedback.created_at?.slice(0, 10) === selectedDate;

    return matchesKeyword && matchesDate;
  });

  return (
    <section className="mt-12">

      {/* Heading */}

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-900">
          Feedback List
        </h2>

        <p className="text-slate-500 mt-1">
          Recent feedback submitted by users.
        </p>

      </div>

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-8">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Search feedback..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

        </div>

      </div>

      {/* Loading */}

      {loading ? (

        <div className="bg-white rounded-2xl border border-slate-200 text-center py-12">
          <p className="text-slate-500">
            Loading feedback...
          </p>
        </div>

      ) : filteredFeedbacks.length === 0 ? (

        <div className="bg-white rounded-2xl border border-dashed border-slate-300 text-center py-12">

          <h3 className="text-xl font-semibold text-slate-700">
            No feedback found
          </h3>

          <p className="text-slate-500 mt-2">
            Submit your first feedback to get started.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredFeedbacks.map((feedback) => (

            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              onDelete={onDelete}
            />

          ))}

        </div>

      )}

    </section>
  );
};

export default FeedbackList;