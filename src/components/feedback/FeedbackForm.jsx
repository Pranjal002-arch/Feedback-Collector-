import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addFeedback } from "../../services/feedbackService";
import { emailValidation } from "../../utils/validation";

/**
 * FeedbackForm Component
 * Renders the feedback submission form and handles validation and submission.
 *
 * @param {Object} props
 * @param {Function} props.onFeedbackAdded - Callback function to refresh the feedback list.
 */
const FeedbackForm = ({ onFeedbackAdded }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * Handles feedback form submission.
   *
   * @param {Object} data - Form data entered by the user.
   */
  const onSubmit = async (data) => {
    try {
      // Show loading state while feedback is being submitted
      setLoading(true);

      // Save feedback to the Supabase database
      await addFeedback(data);

      // Display success notification
      toast.success("Feedback submitted successfully!");

      // Clear all form fields after successful submission
      reset();

      // Refresh feedback list in the parent component
      if (onFeedbackAdded) {
        onFeedbackAdded();
      }
    } catch (error) {
      console.error("Supabase Error:", error);

      // Display error notification if submission fails
      toast.error(error.message || "Failed to submit feedback.");
    } finally {
      // Hide loading state after request completion
      setLoading(false);
    }
  };

  return (
  <div className="max-w-5xl mx-auto">
  <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 mb-10">


    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900">
        Submit Feedback
      </h2>

      <p className="text-slate-500 mt-1">
        Share your thoughts with us.
      </p>
    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >

      {/* Name & Email */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Name */}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", emailValidation)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

      </div>

      {/* Feedback */}

      <div>

        <label className="block text-sm font-medium text-slate-700 mb-2">
          Feedback
        </label>

        <textarea
          rows="4"
          placeholder="Write your feedback here..."
          {...register("message", {
            required: "Message is required",
          })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-2">
            {errors.message.message}
          </p>
        )}

      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>

    </form>

  </div>
  </div>
);
};

export default FeedbackForm;