using System;
using System.Collections.Generic;

namespace SistemaEscolarReact.Models;

public partial class Profesor
{
    public int IdProfesor { get; set; }

    public string Nombre { get; set; } = null!;

    public string ApPaterno { get; set; } = null!;

    public string ApMaterno { get; set; } = null!;

    public virtual ICollection<Boleta> Boleta { get; set; } = new List<Boleta>();
}
