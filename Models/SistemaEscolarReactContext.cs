using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SistemaEscolarReact.Models;

public partial class SistemaEscolarReactContext : DbContext
{
    public SistemaEscolarReactContext()
    {
    }

    public SistemaEscolarReactContext(DbContextOptions<SistemaEscolarReactContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    public virtual DbSet<BoletaDetalle> BoletaDetalles { get; set; }

    public virtual DbSet<Boleta> Boleta { get; set; }

    public virtual DbSet<Materia> Materia { get; set; }

    public virtual DbSet<Profesor> Profesors { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=LAPTOP-0BLK9SJI; DataBase=SistemaEscolarReact;Trusted_Connection=SSPI;MultipleActiveResultSets=true;Trust Server Certificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.IdAlumno);

            entity.ToTable("Alumno");

            entity.Property(e => e.ApMaterno).HasMaxLength(100);
            entity.Property(e => e.ApPaterno).HasMaxLength(100);
            entity.Property(e => e.CveAlumno).HasMaxLength(50);
            entity.Property(e => e.FechaInscripcion).HasColumnType("datetime");
            entity.Property(e => e.Grupo)
                .HasMaxLength(1)
                .IsFixedLength();
            entity.Property(e => e.Nombre).HasMaxLength(100);
            entity.Property(e => e.Sexo)
                .HasMaxLength(1)
                .IsFixedLength();
        });

        modelBuilder.Entity<BoletaDetalle>(entity =>
        {
            entity.HasKey(e => e.IdBoletaDetalle);

            entity.ToTable("BoletaDetalle");

            entity.Property(e => e.Calificacion).HasColumnType("decimal(18, 0)");

            entity.HasOne(d => d.FkBoletaNavigation).WithMany(p => p.BoletaDetalles)
                .HasForeignKey(d => d.FkBoleta)
                .HasConstraintName("FK_BoletaBoletaDetalle");

            entity.HasOne(d => d.FkMateriaNavigation).WithMany(p => p.BoletaDetalles)
                .HasForeignKey(d => d.FkMateria)
                .HasConstraintName("FK_MateriaMateria");
        });

        modelBuilder.Entity<Boleta>(entity =>
        {
            entity.HasKey(e => e.IdBoleta);

            entity.HasOne(d => d.FkAlumnoNavigation).WithMany(p => p.Boleta)
                .HasForeignKey(d => d.FkAlumno)
                .HasConstraintName("FK_AlumnoAlumno");

            entity.HasOne(d => d.FkProfesorNavigation).WithMany(p => p.Boleta)
                .HasForeignKey(d => d.FkProfesor)
                .HasConstraintName("FK_ProfesorProfesor");
        });

        modelBuilder.Entity<Materia>(entity =>
        {
            entity.HasKey(e => e.IdMateria);

            entity.Property(e => e.CveMateria).HasMaxLength(10);
            entity.Property(e => e.Nombre).HasMaxLength(50);
        });

        modelBuilder.Entity<Profesor>(entity =>
        {
            entity.HasKey(e => e.IdProfesor);

            entity.ToTable("Profesor");

            entity.Property(e => e.ApMaterno).HasMaxLength(100);
            entity.Property(e => e.ApPaterno).HasMaxLength(100);
            entity.Property(e => e.Nombre).HasMaxLength(100);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario);

            entity.ToTable("Usuario");

            entity.Property(e => e.Password).HasMaxLength(20);
            entity.Property(e => e.Rol).HasMaxLength(20);
            entity.Property(e => e.Usuario1)
                .HasMaxLength(20)
                .HasColumnName("Usuario");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
