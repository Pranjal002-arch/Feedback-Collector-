import { formatDate } from "../../utils/formatDate";
import { truncateText } from "../../utils/helpers";
/**
 * Displays a single feedback entry.
 *
 * @param {Object} props
 * @param {Object} props.feedback - Feedback object
 * @param {Function} props.onDelete - Delete callback
 */
const FeedbackItem = ({ feedback, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{feedback.name}</h3>

          <p className="text-sm text-gray-500">
            {feedback.email}
          </p>

          <p className="mt-3 text-gray-700">
            {truncateText(feedback.message)}
          </p>

          <p className="text-xs text-gray-400 mt-3">
            {formatDate(feedback.created_at)}
          </p>
        </div>

        <button
          onClick={() => onDelete(feedback.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;