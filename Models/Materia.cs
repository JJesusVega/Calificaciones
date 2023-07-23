using System;
using System.Collections.Generic;

namespace SistemaEscolarReact.Models;

public partial class Materia
{
    public int IdMateria { get; set; }

    public string CveMateria { get; set; } = null!;

    public string Nombre { get; set; } = null!;

    public virtual ICollection<BoletaDetalle> BoletaDetalles { get; set; } = new List<BoletaDetalle>();
}
