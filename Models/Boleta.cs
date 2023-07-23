using System;
using System.Collections.Generic;

namespace SistemaEscolarReact.Models;

public partial class Boleta
{
    public int IdBoleta { get; set; }

    public int FkAlumno { get; set; }

    public int FkProfesor { get; set; }

    public virtual ICollection<BoletaDetalle> BoletaDetalles { get; set; } = new List<BoletaDetalle>();

    public virtual Alumno FkAlumnoNavigation { get; set; } = null!;

    public virtual Profesor FkProfesorNavigation { get; set; } = null!;
}
