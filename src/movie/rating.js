/**
 * A rating class that will show the individual movie ratings.
 * It is assumed that maximum is 5.
 */
const Rating = ({ ratings }) => {
  return (
    <div>
      <span className={"text-warning"}>
        {[...Array(ratings)].map((i, n) => <i key={`solid${n}`} className="fa-solid fa-star pe-1" />
        )}
      </span>
      <span className={"text-warning"}>
        {[...Array(5 - ratings)].map((i, n) => <i key={`empty${n}`} className="fa-regular fa-star pe-1" />
        )}
      </span>
    </div>
  );
}

export default Rating;