import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";

export const clasificaciones: string[] = [
  "Anabólicos",
  "Analgésicos",
  "Antiácidos antiflautulentos",
  "Antibióticos",
  "Antidiarreicos ",
  "Antieméticos (nauseas, vómito)",
  "Antihemorrágicos",
  "Antiinflamatorios",
  "Antiintoxicantes",
  "Antiparasitarios externos, insecticidas",
  "Antiparasitarios internos",
  "Antisépticos, bactericidas",
  "Antiulcerosos",
  "Glucocorticoides",
  "Diuréticos",
  "Hematínicos",
  "Hemostáticos",
  "Hepatoprotectores",
  "Inmunoestimulantes",
  "Insecticidas para fumigar",
  "Mucolíticos",
  "Problemas cardíacos",
  "Problemas oftálmicos",
  "Problemas óticos y dérmicos",
  "Quimioterápicos",
  "Vitaminas",
  "Otros",
];

export const status: string[] = [
  "Nuevo",
  "Usado",
  "Usado/mitad",
  "Usado c/lleno",
  "Usado c/vacio",
];

export const vias: string[] = ["Oral", "Inyectable", "Tópica"];

export const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  laboratorio: yup.string().optional(),
  ingrediente_principal: yup
    .string()
    .required("El ingrediente principal es obligatorio"),
  origen: yup.string().optional(),
  estado: yup
    .string()
    .oneOf(status, "El estado debe ser uno de los valores predefinidos")
    .required("El estado es obligatorio"),
  formato: yup.string().optional(),
  fecha_vencimiento: yup
    .string()
    .matches(/\d\d\d\d-\d\d-\d\d/)
    .required("La fecha de vencimiento es obligatoria")
    .transform((fecha: string) => {
      const [month, day, anio] = fecha.split("/");
      return `${anio}-${month}-${day}`;
    }),
  fecha_registro: yup
    .string()
    .matches(/\d\d\d\d-\d\d-\d\d/)
    .required("La fecha de registro es obligatoria")
    .transform((fecha: string) => {
      const [month, day, anio] = fecha.split("/");
      return `${anio}-${month}-${day}`;
    }),
  volumen: yup
    .number()
    .typeError("El volumen debe ser un número")
    .required("El volumen es obligatorio"),
  ubicacion: yup.string().required("La ubicación es obligatoria"),
  via: yup.string().oneOf(vias).required("La vía es obligatoria"),
  tipo: yup
    .string()
    .oneOf(clasificaciones)
    .required("La clasificación es obligatoria"),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
