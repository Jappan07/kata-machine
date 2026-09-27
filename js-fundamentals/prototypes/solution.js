function myExtends(Supertype, Subtype) {
    // properties
    function ExtendedType(args){
        Supertype.apply(this,args)
        Subtype.apply(this,args)
    }

    // instance methods
    Object.setPrototypeOf(Subtype.prototype,Supertype.prototype)
    ExtendedType.prototype = Object.create(Subtype.prototype)

    // restore the constuctor of ExtendedType since it has been changed to Subtype
    ExtendedType.prototype.constructor = ExtendedType

    // static methods
    Object.setPrototypeOf(ExtendedType,Supertype)

    return ExtendedType
}
