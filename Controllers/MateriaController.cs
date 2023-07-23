using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaEscolarReact.Models;

namespace SistemaEscolarReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MateriaController : ControllerBase
    {
        private readonly SistemaEscolarReactContext _dbContext;

        public MateriaController(SistemaEscolarReactContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Materia> lstMaterias = await _dbContext.Materia.OrderByDescending(c => c.IdMateria).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lstMaterias);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Materia request)
        {
            await _dbContext.Materias.AddAsync(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Materia request)
        {
            _dbContext.Materias.Update(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Materia alumno = _dbContext.Materias.Find(id);

            _dbContext.Alumnos.Remove(alumno);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
