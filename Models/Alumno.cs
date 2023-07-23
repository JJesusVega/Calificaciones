using System;
using System.Collections.Generic;

namespace SistemaEscolarReact.Models;

public partial class Alumno
{
    public int IdAlumno { get; set; }

    public string CveAlumno { get; set; } = null!;

    public string Nombre { get; set; } = null!;

    public string? ApPaterno { get; set; }

    public string? ApMaterno { get; set; }

    public string Sexo { get; set; } = null!;

    public short Grado { get; set; }

    public string? Grupo { get; set; }

    public DateTime FechaInscripcion { get; set; }

    public virtual ICollection<Boleta> Boleta { get; set; } = new List<Boleta>();
}
