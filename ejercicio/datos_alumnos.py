datos = []

def cargar_alumnos():
    nombre = input("Ingrese el nombre del alumno: ")

    alumno = next((al for al in datos if al[0] == nombre), None)
    if alumno:
        print("El alumno ya existe")
        opcion = input("¿Quiere agregar (A) o modificar (M) una nota?: ").upper()

        if opcion == "A":
            nueva_materia = input("Ingrese el nombre de la nueva materia: ")
            nueva_nota = int(input("Ingrese la nota: "))
            alumno[1].append([nueva_materia, nueva_nota])
            print(f"Se agregó la materia {nueva_materia} con la nota {nueva_nota}")
        elif opcion == "M":
            materia = input("Ingrese el nombre de la materia a modificar: ")
            nota = int(input("Ingrese la nueva nota: "))
            materia_encontrada = next((m for m in alumno[1] if m[0] == materia), None)

            if materia_encontrada:
                materia_encontrada[1] = nota
                print(f"Se actualizó la materia {materia} con la nota {nota}")
            else:
                print("Materia no encontrada")
        else:
            print("Opción no válida")
    else:
        materias = []
        while True:
            materia = input("Ingrese el nombre de la materia: ")
            nota = int(input("Ingrese la nota de la materia: "))
            materias.append([materia, nota])
            continuar = input("¿Desea agregar otra materia? (s/n): ").lower()
            if continuar != 's':
                break
        datos.append([nombre, materias])
        print("Alumno agregado correctamente")

while input("¿Desea agregar datos de un alumno? (s/n): ").lower() == 's':
    cargar_alumnos()

print("\nDatos de alumnos:")
for alumno in datos:
    nombre = alumno[0]
    print(f"{nombre}:")
    for materia in alumno[1]:
        print(f" - {materia[0]}: {materia[1]}")
    print("")