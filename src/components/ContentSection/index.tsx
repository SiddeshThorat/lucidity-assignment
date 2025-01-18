import Spinner from "../Spinner"
import Table from "../Table"

const ContentSection = ({ fetching }: { fetching: boolean }) => (
  <div className="h-[60vh] rounded-2xl">
    {fetching ? (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    ) : (
      <Table />
    )}
  </div>
)

export default ContentSection