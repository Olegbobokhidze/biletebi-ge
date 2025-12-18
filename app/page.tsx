import Image from "next/image";
import Link from "next/link";

export default function EventPage() {
  return (
    <main className="w-full flex text-black mt-20">
      <div className="mx-auto max-w-384 px-4 min-h-[calc(100vh-64px)] flex">
        <section className="w-full pr-12 py-16 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">მაკნატუნა</h1>

          <p className="font-medium mb-4">ბილეთის საყიდლად აირჩიეთ დრო</p>
          <div className="py-4 flex items-center justify-center gap-4">
            <Card id={1} date="18 დეკ, 19:00" price="30 ლარი" />
            <Card id={2} date="19 დეკ, 19:00" price="35 ლარი" />
            <Card id={3} date="20 დეკ, 19:00" price="40 ლარი" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            ორგანიზატორი: მარიამ უგრეხელიძის კამერული საბალეტო დასი
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            გრიბოედოვის თეატრი
          </p>

          <article className="space-y-5 text-sm leading-6">
            <p>
              საბალეტო კამერული დასი წარმოგიდგენთ პეტრე ჩაიკოვსკის ბალეტ
              “მაკნატუნას”, ერნსტ თეოდორ ჰოფმანის ზღაპრის მიხედვით, გრიბოედოვის
              თეატრში.
            </p>

            <p>
              `მაკნატუნა` — ჰოფმანის ჯადოსნური ზღაპარია, რომელიც ერთნაირად
              შეუყვარდათ დიდებსაც და პატარებსაც.
            </p>

            <p>
              ზღაპარი მოგვითხრობს მამაც გოგონა კლარაზე, მოჯადოებულ პრინც
              მაკნატუნასა და ბოროტი თაგვების მეფის შესახებ...
            </p>

            <p>
              მარიამ უგრეხელიძის კამერული ბალეტის მიერ დადგმული ბალეტი
              „მაკნატუნა“ არის საოცარი, იდუმალი, კეთილი ზღაპარი...
            </p>

            <p className="font-medium">დაუვიწყარი საღამო გელით!</p>

            <p>
              საბალეტო კამერული დასის სამხატვრო ხელმძღვანელი და დამდგმელი
              ქორეოგრაფი — მარიამ უგრეხელიძე.
            </p>

            <p>საღამოს ორგანიზატორი და კოსტიუმების მხატვარი — მადონა ნიორაძე</p>

            <div>
              <h3 className="font-semibold mb-2">მონაწილეები:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>კლარა შტალბაუმი — ქეთევან კობახიძე, ელენე წიკლაური</li>
                <li>მაკნატუნა / პრინცი — გიორგი სანიკიძე</li>
                <li>ლედი შტალბაუმი — ანასტასია მელიქიშვილი</li>
                <li>ყვავილების დედოფალი — მარიამ უგრეხელიძე</li>
                <li>ბენჟამინ შტალბაუმი — ნიკოლოზ გუმბერიძე</li>
                <li>ფრიც შტალბაუმი — ბაია ჯაკობია</li>
                <li>ლუიზა შტალბაუმი — მარიამ გოგოძე</li>
                <li>დროსელმეიერი — ბესარიონ შათირიშვილი</li>
                <li>ზაფხულის ფერია — ელენე წიკლაური</li>
              </ul>
            </div>

            <p className="italic">
              მ. უგრეხელიძის საბალეტო სკოლის აღსაზრდელები.
            </p>
          </article>
        </section>

      </div>
      <aside className="w-[30%] sticky top-24 h-[calc(100vh-96px)]">
        <Image
          src="/maknatuna.webp"
          alt="მაკნატუნა"
          fill
          className="object-cover"
          priority
        />
      </aside>
    </main>
  );
}

type CardProps = {
  id: number;
  date: string;
  price: string;
};

const Card = ({ id, date, price }: CardProps) => {
  return (
    <Link
      href={`/seat-selection/${id}`}
      className="border w-full flex items-center justify-center cursor-pointer relative border-gray-300 rounded-lg h-24 hover:border-gray-700 transition-colors"
    >
      <div className="absolute top-2 left-2 bg-purple-100 p-1 rounded-md font-medium">
        ხუთ
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-semibold">{date}</h1>
        <p>{price}</p>
      </div>
    </Link>
  );
};
