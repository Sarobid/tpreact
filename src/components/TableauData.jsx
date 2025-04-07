import dataJson from '../assets/data.json';

function DetailsNote({unique_id, course, student, date, grade}) {
    return (
        <>
              <td>{unique_id}</td>
              <td>{course}</td>
              <td>{student.firstname}</td>
              <td>{date}</td>
              <td>{grade}</td>
        </>
    );

}
function TableauData({itemTrier}) {
    const data = triageAleatoireItem(dataJson, itemTrier);
    function triageAleatoireItem(data,item) {
        let valeurs = data.map(obj => obj[item]);
        for (let i = valeurs.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [valeurs[i], valeurs[j]] = [valeurs[j], valeurs[i]];
        }
        let resultat = data.map((obj, index) => ({
          ...obj,
          [item]: valeurs[index]
        }));
        return resultat;
      }
    return (
    <div>
     <table className="table tqble-striped table-bordered">
        <thead>
          <tr>
            <th>unique_id</th>
            <th>Cours</th>
            <th>Etudiant</th>
            <th>date</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
                <DetailsNote
                    unique_id={value.unique_id}
                    course={value.course}
                    student={value.student}
                    date={value.date}
                    grade={value.grade}
                />
            </tr>
          ))}
        </tbody>
     </table>
    </div>
  );
}
export default TableauData;