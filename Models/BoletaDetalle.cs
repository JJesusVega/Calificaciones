using System;
using System.Collections.Generic;

namespace SistemaEscolarReact.Models;

public partial class BoletaDetalle
{
    public int IdBoletaDetalle { get; set; }

    public int FkBoleta { get; set; }

    public int FkMateria { get; set; }

    public decimal Calificacion { get; set; }

    public virtual Boleta FkBoletaNavigation { get; set; } = null!;

    public virtual Materia FkMateriaNavigation { get; set; } = null!;
}
