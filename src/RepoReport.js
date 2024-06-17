import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "./actions";

function RepoReport() {
  const dispatch = useDispatch();
  const { data: repos, loading, error } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Repo name</th>
            <th>Repo Visibility</th>
            <th>Repo Base Branch</th>
            <th>Repo License Type</th>
            <th>Repo Url(svn_url node)</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? error
              ? <tr><td><p style={{backgroundColor: "red"}}>{error}</p></td></tr>
              : repos.map((repo, index) => {
                  return (
                    <tr key={index}>
                      <td>{repo?.name}</td>
                      <td>{repo?.visibility}</td>
                      <td>{repo?.default_branch}</td>
                      <td>{repo?.license?.name || "NA"}</td>
                      <td>
                        <a
                          href={repo?.svn_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo?.svn_url}
                        </a>
                      </td>
                    </tr>
                  );
                })
            : <tr><td><p style={{backgroundColor: "green"}}>Loading...</p></td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export default RepoReport;
