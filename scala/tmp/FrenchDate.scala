/**
  * Created by kanziw on 2016. 8. 20..
  */

import java.util.{Date, Locale}
import java.text.DateFormat._
object FrenchDate {
  def main(args: Array[String]) {
    val now = new Date
    val df = getDateInstance(LONG, Locale.FRANCE)
    println(df format now)
  }
}
